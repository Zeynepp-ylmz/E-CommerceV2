import { Control, FieldValues, Path } from "react-hook-form";

export interface AppTextInputControllerProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    rules?: object
    placeholder?: string
    label?: string
}