'use client'

import { Box, Button, Divider, Stack, styled, Typography } from '@mui/material'
import { FormTextField } from '../form/FormTextField'
import { useCreateArticle } from './hooks/useCreateArticle'
import Image from 'next/image'

export const CreateArticle = () => {
    const {
        formProps: { control, handleSubmit, setValue },
        onSubmit,
        handleFileUpload,
        image,
    } = useCreateArticle()

    return (
        <Stack gap={3} component='form' onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='row' gap={4}>
                <Typography variant='h3'>Create new article</Typography>
                <Button variant='contained' type='submit'>
                    Publish
                </Button>
            </Stack>
            <FormTextField name='title' control={control} label='Article title' placeholder='My first article' />
            <Stack gap={1}>
                <Typography>Featured image</Typography>
                {image ? (
                    <>
                        <Image src={URL.createObjectURL(image)} alt='uploadImage' width={200} height={200} />
                        <Stack direction='row' gap={1}>
                            <Button component='label' tabIndex={-1} color='error'>
                                Upload new
                                <HiddenInput type='file' onChange={handleFileUpload} multiple={false} accept='image/*' />
                            </Button>
                            <Divider orientation='vertical' variant='middle' flexItem />
                            <Button onClick={() => setValue('image', null)}>Delete image</Button>
                        </Stack>
                    </>
                ) : (
                    <Box>
                        <Button component='label' variant='contained' tabIndex={-1}>
                            Upload an Image
                            <HiddenInput type='file' onChange={handleFileUpload} multiple={false} accept='image/*' />
                        </Button>
                    </Box>
                )}
            </Stack>
            <FormTextField name='content' control={control} label='Content' placeholder='Supports markdown. Yay!' />
        </Stack>
    )
}

const HiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})
