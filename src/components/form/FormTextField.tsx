import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

type FormTextFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TextFieldProps & Required<Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control'>>

export const FormTextField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    name,
    control,
    ...props
}: FormTextFieldProps<TFieldValues, TName>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ fieldState: { error }, field }) => (
                <TextField
                    {...props}
                    {...field}
                    error={error !== undefined || props.error}
                    helperText={error?.message ?? props.helperText}
                    value={field.value ?? ''}
                    onChange={(e) => {
                        field.onChange(e.target.value)
                        props.onChange?.(e)
                    }}
                    onBlur={(e) => {
                        field.onBlur()
                        props.onBlur?.(e)
                    }}
                    slotProps={{ inputLabel: { shrink: true }, ...props.slotProps }}
                />
            )}
        />
    )
}
