import { setField } from "~/util/validation"
import CheckboxField from "./CheckboxField"
import DateField from "./DateField"
import DropdownField from "./DropdownField"
import ImageField from "./ImageField"
import MainCTA from "./MainCTA"
import NumberField from "./NumberField"
import PasswordField from "./PasswordField"
import RadioField from "./RadioField"
import TextareaField from "./TextareaField"
import TextField from "./TextField"

import { useState } from "react"

interface Props {
    model?: any
    onSubmit?: (form?: any) => any
}

function GenericForm({ model = [], onSubmit = () => null }: Props) {
    for (const [key, value] of Object.entries<any>(model)) {
        if (["isValid"].includes(key)) continue

        model[key].name = key

        if (model[key].isValid == undefined) model[key].isValid = true
    }

    const [form, setform] = useState(model)

    const set = (key: string, value: any) => setField(key, value, form, setform)

    const renderMap = {
        checkbox: (field: any) => <CheckboxField {...field} onChange={(value: any) => set(field.name, value)} />,
        date: (field: any) => <DateField {...field} onChange={(value: any) => set(field.name, value)} />,
        dropdown: (field: any) => (
            <DropdownField
                {...field}
                onChange={(value: any) => {
                    set(field.name, value)
                }}
            >
                {field.children}
            </DropdownField>
        ),
        image: (field: any) => <ImageField {...field} onChange={(value: any) => set(field.name, value)} />,
        number: (field: any) => <NumberField {...field} onChange={(value: any) => set(field.name, value)} />,
        password: (field: any) => <PasswordField {...field} onChange={(value: any) => set(field.name, value)} />,
        radio: (field: any) => <RadioField {...field} onChange={(value: any) => set(field.name, value)} />,
        textarea: (field: any) => <TextareaField {...field} onChange={(value: any) => set(field.name, value)} />,
        text: (field: any) => <TextField {...field} onChange={(value: any) => set(field.name, value)} />,

        submit: (field: any) => (
            <MainCTA
                className='m-t-s'
                {...field}
                disabled={!form.isValid}
                onClick={() => {
                    onSubmit(form)

                    if (field.onClick) field.onClick()
                }}
            >
                {field.text}
            </MainCTA>
        ),

        custom: (field: any) => field.component,
    }

    const children = []

    for (const [key, value] of Object.entries<any>(form)) {
        if (["isValid"].includes(key)) continue

        children.push(
            <div className='m-b-xs' key={key}>
                {renderMap[value.type as keyof typeof renderMap](value)}
            </div>,
        )
    }

    return <div>{children}</div>
}

export default GenericForm
