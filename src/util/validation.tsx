export interface ValidationResult {
    isValid: boolean
    message: string
}

export const setField = (key: string, value: any, formState: any, setFormState: any): void => {
    const field = formState[key]

    field.value = value

    if (field.validators)
        field.validators.every((validator: any): boolean => {
            const result = validator(value)

            field.isValid = result.isValid
            field.errorMessage = result.isValid ? undefined : result.message

            return field.isValid
        })

    // Determine if the entire form is valid (skip the isValid property, because it's not an actual form field).
    formState.isValid = Object.keys(formState)
        .filter((item: string) => item !== "isValid")
        .map((key: any) => !!formState[key].isValid)
        .reduce((a: boolean, b: boolean) => a && b)

    setFormState({ ...formState })
}

export default {
    required: function (value: any): ValidationResult {
        return {
            isValid:
                value != null &&
                value != undefined &&
                (typeof value == "string" ? !!(value.length && value.trim().length) : true),
            message: "This field is required.",
        }
    },
    notNull: function (value: any): ValidationResult {
        return {
            isValid: value != null,
            message: "Value cannot be null.",
        }
    },
    notUndefined: function (value: any): ValidationResult {
        return {
            isValid: value != undefined,
            message: "Value cannot be undefined.",
        }
    },
    maxValue: function (maximum: any): object {
        return function (value: any): ValidationResult {
            return {
                isValid: value <= maximum,
                message: `Value must be lower than ${maximum}.`,
            }
        }
    },
    minValue: function (minimum: any): object {
        return function (value: any): ValidationResult {
            return {
                isValid: value >= minimum,
                message: `Value must be greater than ${minimum}.`,
            }
        }
    },
    maxLength: function (maximumCharacters: any): object {
        return function (value: any): ValidationResult {
            return {
                isValid: value ? value.length <= maximumCharacters : true,
                message: `Value must be shorter than ${maximumCharacters} characters.`,
            }
        }
    },
    minLength: function (minimumCharacters: any): object {
        return function (value: any): ValidationResult {
            return {
                isValid: value ? value.length >= minimumCharacters : true,
                message: `Value must be longer than ${minimumCharacters} characters.`,
            }
        }
    },
    isValue: function (values: any): object {
        return function (value: any): ValidationResult {
            return {
                isValid: values.indexOf(value) != -1,
                message: "Field is not valid.",
            }
        }
    },
    isEmail: function (value: any): ValidationResult {
        return {
            isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: "Value must be a valid e-mail.",
        }
    },
    isNumeric: function (value: any): ValidationResult {
        return {
            isValid: value && !isNaN(value),
            message: "Value must be a number.",
        }
    },
    isTime: function (value: any): ValidationResult {
        return {
            isValid: /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/.test(value),
            message: "Value must be a valid time.",
        }
    },
    isDate: function (value: any): ValidationResult {
        return {
            isValid: /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}\.$/.test(value),
            message: "Value must be a valid date.",
        }
    },
    isUrl: function (value: any): ValidationResult {
        return {
            isValid: new RegExp(
                "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                "i",
            ).test(value),
            message: "Value must be a valid URL.",
        }
    },
    customRegex: function (regex: any): object {
        return function (value: any): ValidationResult {
            return {
                isValid: value && !!new RegExp(regex, "i").test(value),
                message: "Field is not valid.",
            }
        }
    },
}
