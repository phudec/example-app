'use client'
import { AppBar, Box, Button, Menu, MenuItem, Stack, Toolbar } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useRef, useState } from 'react'
import { logOut } from '@/redux/slices/authSlice'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const anchorEl = useRef<HTMLButtonElement | null>(null)

    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
    const dispatch = useAppDispatch()

    const handleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const onLogOut = () => {
        setIsOpen(false)
        dispatch(logOut())
    }

    return (
        <AppBar position='static' color='transparent'>
            <Toolbar>
                <Box mr={2}>
                    <Image src={'/cat.png'} alt='cat.png' width={40} height={40} />
                </Box>
                <Stack direction='row' gap={1} width='100%'>
                    <Button href='/' LinkComponent={Link}>
                        Recent articles
                    </Button>
                    <Button LinkComponent={Link} href='/about'>
                        About
                    </Button>

                    <Stack marginLeft='auto' direction='row' gap={1}>
                        {isAuthenticated ? (
                            <>
                                <Button LinkComponent={Link} href='/my-articles'>
                                    My Articles
                                </Button>
                                <Button LinkComponent={Link} href='/create-article'>
                                    Create Article
                                </Button>
                                <Box marginLeft={2}>
                                    <Button
                                        onClick={handleMenu}
                                        ref={anchorEl}
                                        endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        <AccountCircleIcon />
                                    </Button>
                                    <Menu
                                        id='menu-appbar'
                                        anchorEl={anchorEl.current}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        open={isOpen}
                                        onClose={handleMenu}
                                    >
                                        <MenuItem onClick={onLogOut}>Log Out</MenuItem>
                                    </Menu>
                                </Box>
                            </>
                        ) : (
                            <Button sx={{ marginLeft: 'auto' }} LinkComponent={Link} href='/login'>
                                Login
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
