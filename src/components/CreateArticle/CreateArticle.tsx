'use client'

import { Button, Stack, Typography } from '@mui/material'
import { FormTextField } from '../form/FormTextField'
import { useCreateArticle } from './hooks/useCreateArticle'

export const CreateArticle = () => {
    const {
        formProps: { control, handleSubmit },
        onSubmit,
    } = useCreateArticle()

    return (
        <Stack gap={3} component='form' onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='row' gap={4}>
                <Typography variant='h3'>Create new article</Typography>
                <Button variant='contained' type='submit'>
                    Publish
                </Button>
            </Stack>
            <FormTextField name='title' control={control} label='Article title' />
            <FormTextField name='content' control={control} label='Content' />
        </Stack>
    )
}
