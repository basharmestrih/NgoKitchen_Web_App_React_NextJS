import { Typography } from "@mui/material";

export default function HeaderLogo() {
  return (
    <Typography
      component="div"
      sx={{
        fontFamily: "Orbitron, sans-serif",
        fontSize: { xs: "1.5rem", md: "1.95rem" },
        letterSpacing: "0.12em",
        fontWeight: 900,
        lineHeight: 0.95,
        textTransform: "uppercase",
        textShadow: "0 1px 0 rgba(255,255,255,0.35)",
      }}
    >
      NGO KITCHEN
    </Typography>
  );
}
