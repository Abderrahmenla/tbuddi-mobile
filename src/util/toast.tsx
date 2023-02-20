import { toast } from "react-toast"

const colors = {
    info: "#10abe2",
    success: "#00A699",
    warn: "#eabb53",
    error: "#db4437",
};

export default {
    info: (message: string) => {
        toast.info(message, { backgroundColor: colors.info });
    },
    success: (message: string) => {
        toast.success(message, { backgroundColor: colors.success });
    },
    warn: (message: string) => {
        toast.warn(message, { backgroundColor: colors.warn });
    },
    error: (message: string) => {
        toast.error(message, { backgroundColor: colors.error });
    },
};

export const info = (message: string) => {
    toast.info(message, { backgroundColor: colors.info });
};

export const success = (message: string) => {
    toast.success(message, { backgroundColor: colors.success });
};

export const warn = (message: string) => {
    toast.warn(message, { backgroundColor: colors.warn });
};

export const error = (message: string) => {
    toast.error(message, { backgroundColor: colors.error });
};

