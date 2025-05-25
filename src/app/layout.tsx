import { Layout } from '@/components/layout/Layout'
import { StoreProvider } from '@/redux/StoreProvider'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { theme } from '../theme/theme'
import './global.css'

type RootLayoutProps = {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <StoreProvider>
                            <Layout>{children}</Layout>
                        </StoreProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}

export default RootLayout
