"use client";

import { useState } from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useThemeMode } from "@/hooks/useThemeMode";
import { ROUTES, CTA_LABEL, CTA_PATH } from "@/constants";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

export function LayoutAppBar() {
    const { mode, toggle } = useThemeMode();
    const [mobileOpen, setMobileOpen] = useState(false);
    const isDark = mode === "dark";

    const navLinks = ROUTES.filter((r) => r.path !== "/");

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    bgcolor: isDark ? "rgba(10,10,10,0.75)" : "rgba(255,255,255,0.72)",
                    borderBottom: "1px solid",
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    color: "text.primary",
                    transition: "background-color 0.3s ease, border-color 0.3s ease",
                }}
            >
                <Toolbar sx={{ gap: 1, py: 1.5, minHeight: { xs: 64, md: 72 } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open menu"
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { md: "none" }, mr: 0.5 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <MuiLink
                        component={NextLink}
                        href="/"
                        color="inherit"
                        underline="none"
                        sx={{
                            flexShrink: 0,
                            transition: "opacity 0.2s",
                            "&:hover": { opacity: 0.85 },
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 120,
                                height: 80,
                                boxShadow: isDark
                                    ? "0 0 0 1.5px rgba(255,255,255,0.12)"
                                    : "0 0 0 1.5px rgba(0,0,0,0.08)",
                            }}
                        >
                            <Image
                                src="/assets/images/logo.png"
                                alt="Tavisi Partners"
                                width={120}
                                height={80}
                                style={{ objectFit: "cover", display: "block" }}
                                priority
                            />
                        </Box>
                    </MuiLink>

                    <Box sx={{ flex: 1 }} />
                    <Box
                        component="nav"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        {navLinks.map((route) => (
                            <MuiLink
                                key={route.path}
                                component={NextLink}
                                href={route.path}
                                color="inherit"
                                underline="hover"
                                sx={{
                                    px: 2,
                                    py: 1,
                                    typography: "body2",
                                    fontWeight: 500,
                                    transition: "color 0.2s",
                                }}
                            >
                                {route.label}
                            </MuiLink>
                        ))}
                    </Box>
                    {/* <Button
                        component={NextLink}
                        href={CTA_PATH}
                        variant="contained"
                        color="primary"
                        size="medium"
                        sx={{
                            display: { xs: "none", md: "inline-flex" },
                            ml: 2,
                            borderRadius: 10,
                            px: 2.5,
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                            transition: "transform 0.2s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 6px 20px rgba(14, 116, 144, 0.4)",
                            },
                            "@media (prefers-reduced-motion: reduce)": {
                                "&:hover": { transform: "none" },
                            },
                        }}
                    >
                        {CTA_LABEL}
                              </Button> */}
                    <IconButton
                        color="inherit"
                        onClick={toggle}
                        aria-label="toggle theme"
                        edge="end"
                    >
                        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 280,
                        borderRight: "1px solid",
                        borderColor: "divider",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        bgcolor: isDark ? "rgba(10,10,10,0.95)" : "rgba(255,255,255,0.95)",
                    },
                }}
            >
                <Box sx={{ py: 3, px: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                        <Box
                            sx={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 100,
                                height: 50,
                                flexShrink: 0,
                                boxShadow: isDark
                                    ? "0 0 0 1.5px rgba(255,255,255,0.12)"
                                    : "0 0 0 1.5px rgba(0,0,0,0.08)",
                            }}
                        >
                            <Image
                                src="/assets/images/logo.png"
                                alt="Tavisi Partners"
                                width={100}
                                height={50}
                                style={{ objectFit: "cover", display: "block" }}
                                priority
                            />
                        </Box>
                    </Box>

                    <List sx={{ pt: 1 }}>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={NextLink}
                                href="/"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText
                                    primary="Home"
                                    primaryTypographyProps={{ fontWeight: 500 }}
                                />
                            </ListItemButton>
                        </ListItem>
                        {navLinks.map((r) => (
                            <ListItem key={r.path} disablePadding>
                                <ListItemButton
                                    component={NextLink}
                                    href={r.path}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <ListItemText
                                        primary={r.label}
                                        primaryTypographyProps={{ fontWeight: 500 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    {/* <Button
                        component={NextLink}
                        href={CTA_PATH}
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            mt: 3,
                            py: 1.5,
                            borderRadius: 10,
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                            "&:hover": { boxShadow: "0 6px 20px rgba(14, 116, 144, 0.4)" },
                        }}
                        onClick={() => setMobileOpen(false)}
                    >
                        {CTA_LABEL}
                    </Button> */}
                </Box>
            </Drawer>
        </>
    );
}
