'use client'
import { Button, Card, Stack, Typography } from '@mui/material'
import { FormTextField } from '../form/FormTextField'
import { useLogin } from './hooks/useLogin'

export const Login = () => {
    const {
        formProps: { control, handleSubmit },
        onSubmit,
    } = useLogin()

    return (
        <Card>
            <Stack gap={2} p={3} component='form' onSubmit={handleSubmit(onSubmit)}>
                <Typography variant='h4'>Log In</Typography>
                <FormTextField name='username' control={control} label='Username' placeholder='username' />
                <FormTextField name='password' control={control} label='Password' placeholder='••••••••' type='password' />
                <Button type='submit'>Log In</Button>
            </Stack>
        </Card>
    )
}
