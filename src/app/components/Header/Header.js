"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import MobileMenu from "./MobileMenu.js";
import HeaderLogo from "./HeaderLogo/HeaderLogo.js";
import HeaderSections from "./HeaderSections/HeaderSections.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#f3f4f6",
          borderBottom: "1px solid #e5e7eb",
          color: "#111827",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: "45px", md: "72px" }, px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}>
            <IconButton
              onClick={() => setIsMenuOpen((open) => !open)}
              edge="start"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: { xs: 1, sm: 0 },
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <Link href="/home" style={{ textDecoration: "none", color: "inherit" }}>
              <HeaderLogo />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, ml: "auto" }}>
            <HeaderSections />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "#f3f4f6",
            pt: 2,
            px: 2,
          },
        }}
      >
        <MobileMenu onNavigate={() => setIsMenuOpen(false)} />
      </Drawer>
    </>
  );
}
