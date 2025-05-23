import { AppBar, Button, Container, Stack, ThemeProvider, Toolbar, Link as MuiLink, Box } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Link from 'next/link'
import Image from 'next/image'
import { theme } from '../theme/theme'
import './global.css'

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Layout>{children}</Layout>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}

const Layout = ({ children }: RootLayoutProps) => {
    return (
        <Stack height='100vh' width='100vw'>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Box mr={2}>
                        <Image src={'/cat.png'} alt='cat.png' width={40} height={40} />
                    </Box>
                    <Stack direction='row' gap={1} width='100%'>
                        <MuiLink href='/' component={Link}>
                            <Button>Recent articles</Button>
                        </MuiLink>
                        <MuiLink href='/about' component={Link}>
                            <Button>About</Button>
                        </MuiLink>
                        <Button sx={{ marginLeft: 'auto' }}>Login</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Container sx={{ height: '100%' }}>{children}</Container>
        </Stack>
    )
}
