import { Container, Stack } from '@mui/material'
import { Navbar } from './Navbar/Navbar'

type LayoutProps = { children: React.ReactNode }

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Stack height='100vh' width='100vw'>
            <Navbar />
            <Container sx={{ height: '100%', padding: 3 }}>{children}</Container>
        </Stack>
    )
}
