import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Stack,
    Divider
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Shipping', href: '#' }
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, href: '#', name: 'Facebook' },
        { icon: <InstagramIcon />, href: '#', name: 'Instagram' },
        { icon: <TwitterIcon />, href: '#', name: 'Twitter' },
        { icon: <PinterestIcon />, href: '#', name: 'Pinterest' }
    ];

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'black',
                color: 'white',
                py: 6,
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            ModernShop
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Your one-stop destination for trendy fashion.
                        </Typography>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    sx={{
                                        color: 'white',
                                        opacity: 0.8,
                                        textDecoration: 'none',
                                        '&:hover': {
                                            opacity: 1,
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Social Links Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    sx={{
                                        color: 'white',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                {/* Copyright Section */}
                <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ opacity: 0.8, pt: 2 }}
                >
                    {new Date().getFullYear()} ModernShop. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}