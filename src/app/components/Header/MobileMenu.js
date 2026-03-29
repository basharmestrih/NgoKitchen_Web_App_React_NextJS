import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Groups,
  Home,
  Login,
  Mail,
  Restaurant,
} from "@mui/icons-material";

const menuItems = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Community", href: "/community", icon: Groups },
  { label: "Store", href: "/store", icon: Restaurant },
  { label: "Contact Us", href: "/contact", icon: Mail },
];

export default function MobileMenu({ onNavigate }) {
  const { data: session } = useSession();
  const displayName = session?.user?.name?.trim()?.split(" ")[0] || "Join Us";

  return (
    <Box sx={{ width: "100%", mt: 2, px: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: "1.5rem",
            lineHeight: 1.1,
            color: "#111827",
          }}
        >
          Ngo Kitchen
        </Box>
        <Box
          sx={{
            mt: 1,
            fontFamily: "Lato, sans-serif",
            fontSize: "0.95rem",
            color: "#64748b",
          }}
        >
          Food, community, and support in one place
        </Box>
      </Box>

      <List sx={{ width: "100%", p: 0 }}>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.label}
              component={Link}
              href={item.href}
              onClick={onNavigate}
              sx={{
                mb: 1.5,
                px: 1.5,
                py: 1.25,
                borderRadius: 3,
                "&:hover": { backgroundColor: "#e5e7eb", color: "#2563eb" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 42, color: "inherit" }}>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.02rem",
                  letterSpacing: "0.03em",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Button
        component={Link}
        href={session ? "/store" : "/signup"}
        onClick={onNavigate}
        startIcon={<Login />}
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          bgcolor: "#dc2626",
          color: "white",
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 900,
          fontSize: "1rem",
          letterSpacing: "0.05em",
          textTransform: "none",
          borderRadius: 999,
          py: 1.4,
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#b91c1c",
            boxShadow: "none",
          },
        }}
      >
        {displayName}
      </Button>
    </Box>
  );
}
