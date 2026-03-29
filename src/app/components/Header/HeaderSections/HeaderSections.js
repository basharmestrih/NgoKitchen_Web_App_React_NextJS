import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Box,
  Button,
} from "@mui/material";

export default function HeaderSections() {
  const { data: session } = useSession();
  const displayName = session?.user?.name?.trim()?.split(" ")[0] || "Join Us";
  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Community", href: "/community" },
    { label: "Store", href: "/store" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          component={Link}
          href={item.href}
          sx={{
            color: "#111827",
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.04em",
            textTransform: "none",
            px: 1,
          }}
        >
          {item.label}
        </Button>
      ))}
      <Button
        component={Link}
        href={session ? "/store" : "/signup"}
        variant="contained"
        sx={{
          bgcolor: "#d71212",
          color: "white",
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 900,
          fontSize: "0.95rem",
          letterSpacing: "0.05em",
          textTransform: "none",
          borderRadius: 20,
          px: 3,
          py: 1.1,
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
