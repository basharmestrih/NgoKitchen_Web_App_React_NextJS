import { forwardRef } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Check, Remove, Send } from "@mui/icons-material";
import { Orbitron } from "next/font/google";
import useTargetForm from "./useTargetForm.js";

const orbitron = Orbitron({ subsets: ["latin"] });
const countries = ["SYRIA", "TURKEY", "CONGO", "LEBANON", "UAE", "PALESTINE", "SOMALIA", "MYANMAR"];

const TargetForm = forwardRef(({ OnPost, success, error, loading }, ref) => {
  const {
    country,
    setCountry,
    targetDonation,
    handleIncrement,
    handleDecrement,
    selectedAge,
    handleCheckboxChange,
  } = useTargetForm(ref);

  return (
    <Box
      className={orbitron.className}
      sx={{
        p: { xs: 2, md: 4 }, // Smaller padding on mobile
        borderRadius: 4,
        bgcolor: "#ffffff",
        border: "1px solid #E1DEDE",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
        width: "100%",
        maxWidth: 1150,
        mx: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // STACK ON MOBILE
        alignItems: { xs: "stretch", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 4, md: 2 },
      }}
    >
      {/* 1. Hosted Country Section */}
      <Box sx={{ width: { xs: "100%", md: "35%" } }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "#1e293b" }}>
          HOSTED COUNTRY
        </Typography>
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(3, 1fr)" }, 
          gap: 1 
        }}>
          {countries.map((item) => (
            <Chip
              key={item}
              label={item}
              clickable
              onClick={() => setCountry(country === item ? "" : item)}
              sx={{
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "0.75rem",
                bgcolor: country === item ? "#3B82F6" : "#f1f5f9",
                color: country === item ? "white" : "#475569",
                "&:hover": { bgcolor: "#60A5FA", color: "white" }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* 2. Target Age Section */}
      <Box sx={{ width: { xs: "100%", md: "15%" } }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, color: "#1e293b" }}>
          TARGET AGE <span style={{ color: "#94a3b8", fontWeight: 400 }}>(Optional)</span>
        </Typography>
        <FormGroup sx={{ flexDirection: { xs: "row", md: "column" } }}>
          <FormControlLabel
            control={<Checkbox size="small" name="kids" checked={selectedAge === "kids"} onChange={handleCheckboxChange} />}
            label={<Typography fontSize="0.9rem" fontWeight="bold">Kids</Typography>}
          />
          <FormControlLabel
            control={<Checkbox size="small" name="adults" checked={selectedAge === "adults"} onChange={handleCheckboxChange} />}
            label={<Typography fontSize="0.9rem" fontWeight="bold">Adults</Typography>}
          />
        </FormGroup>
      </Box>

      {/* 3. Target Donation Section */}
      <Box sx={{ width: { xs: "100%", md: "20%" }, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, color: "#1e293b" }}>
          TARGET DONATION
        </Typography>
        <Box display="flex" alignItems="center" justifyContent={{xs: "center", md: "flex-start"}} gap={1}>
          <IconButton onClick={handleDecrement} sx={{ bgcolor: "#eff6ff" }} size="small">
            <Remove fontSize="small" />
          </IconButton>
          <Typography variant="h5" sx={{ color: "#3B82F6", fontWeight: 900, minWidth: "60px", textAlign: "center" }}>
            ${targetDonation}
          </Typography>
          <IconButton onClick={handleIncrement} sx={{ bgcolor: "#eff6ff" }} size="small">
            <Add fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* 4. Action Buttons Section */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", sm: "row", md: "column" }, 
        gap: 1.5, 
        width: { xs: "100%", md: "200px" },
        justifyContent: "center"
      }}>
        <Button 
          variant="contained" 
          fullWidth
          disabled={loading}
          onClick={OnPost}
          endIcon={success ? <Check /> : <Send />}
          sx={{ 
            py: 1.5,
            bgcolor: success ? "#22c55e" : "#3B82F6",
            fontWeight: "bold",
            borderRadius: 2,
            boxShadow: "none",
            "&:hover": { bgcolor: success ? "#16a34a" : "#2563eb" }
          }}
        >
          {success ? "POSTED" : "POST NOW"}
          {loading && (
            <CircularProgress size={20} sx={{ color: "white", ml: 1 }} />
          )}
        </Button>
        
        <Button 
          variant="outlined" 
          fullWidth
          sx={{ py: 1.5, fontWeight: "bold", borderRadius: 2, color: "#ef4444", borderColor: "#fecaca" }}
        >
          DELETE
        </Button>
      </Box>
    </Box>
  );
});

export default TargetForm;
