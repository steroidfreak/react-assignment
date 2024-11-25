import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useTheme,
    useMediaQuery,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [location] = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const syncLoginState = () => {
            const loginStatus = localStorage.getItem('loggedIn');
            setIsLoggedIn(loginStatus === 'true');
        };

        syncLoginState();
        window.addEventListener('loginStateChange', syncLoginState);
        return () => window.removeEventListener('loginStateChange', syncLoginState);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('jwtToken');
        window.dispatchEvent(new Event('loginStateChange'));
    };

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'Products', href: '/products' },
        { text: 'Newsletter', href: '/newsletter' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ModernShop
            </Typography>
            <Divider />
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <Link href={item.href} style={{ width: '100%' }}>
                            <ListItemText 
                                primary={item.text}
                                sx={{
                                    textAlign: 'center',
                                    color: location === item.href ? 'primary.main' : 'text.primary',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                    </ListItem>
                ))}
                <Divider sx={{ my: 1 }} />
                {!isLoggedIn ? (
                    <ListItem disablePadding>
                        <Link href="/login" style={{ width: '100%' }}>
                            <ListItemText 
                                primary="Login"
                                sx={{
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                }}
                            />
                        </Link>
                    </ListItem>
                ) : (
                    <ListItem 
                        button 
                        onClick={handleLogout}
                        sx={{ justifyContent: 'center' }}
                    >
                        <ListItemText 
                            primary="Logout"
                            sx={{ textAlign: 'center' }}
                        />
                    </ListItem>
                )}
                <ListItem disablePadding>
                    <Link href="/cart" style={{ width: '100%' }}>
                        <ListItemText 
                            primary="Shopping Cart"
                            sx={{
                                textAlign: 'center',
                                cursor: 'pointer'
                            }}
                        />
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="default" sx={{ backgroundColor: 'white' }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        {/* Mobile menu button */}
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: { xs: 1, md: 0 }, mr: 2 }}
                        >
                            ModernShop
                        </Typography>

                        {/* Desktop menu */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                {menuItems.map((item) => (
                                    <Link key={item.text} href={item.href}>
                                        <Button
                                            sx={{
                                                color: location === item.href ? 'primary.main' : 'text.primary',
                                                mx: 1
                                            }}
                                        >
                                            {item.text}
                                        </Button>
                                    </Link>
                                ))}
                                
                                {!isLoggedIn ? (
                                    <Link href="/login">
                                        <Button 
                                            startIcon={<LoginIcon />}
                                            sx={{
                                                color: 'text.primary',
                                                mx: 1
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button 
                                        onClick={handleLogout}
                                        startIcon={<LogoutIcon />}
                                        sx={{
                                            color: 'text.primary',
                                            mx: 1
                                        }}
                                    >
                                        Logout
                                    </Button>
                                )}
                                <Link href="/cart">
                                    <Button
                                        startIcon={<ShoppingCartIcon />}
                                        sx={{
                                            color: 'text.primary',
                                            mx: 1
                                        }}
                                    >
                                        Cart
                                    </Button>
                                </Link>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>

            {/* Toolbar spacer */}
            <Toolbar />
        </Box>
    );
}
