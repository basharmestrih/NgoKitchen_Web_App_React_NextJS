import React, { forwardRef, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
  Chip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Orbitron } from "next/font/google";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { green } from "@mui/material/colors";
import useTargetForm from "./useTargetForm.js";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"] });


const countries = ["SYRIA", "TURKEY", "CONGO", "LEBANON", "UAE", "PALESTINE", "SOMALIA", "MYANMAR"];

const TargetForm = forwardRef(({ OnPost, success, error, loading }, ref) => {
  const {
    targetDonation,
    handleIncrement,
    handleDecrement,
    selectedAge,
    handleCheckboxChange,
  } = useTargetForm(ref);

  // State to track the selected country
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <Box
      className={orbitron.className}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 3,
        bgcolor: "#ffffffff",
        border: "3px solid #E1DEDE",
        boxShadow: 2,
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        fontfamily:"",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 4,
        color: "#60A5FA", // Applying blue-400 text color globally
      }}
    >
      {/* Left: Countries */}
      <Box sx={{ minWidth: 320 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          Hosted Country
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.5 }}>
          {countries.map((item) => (
            <Chip
              key={item}
              label={item}
              clickable
              onClick={() => setSelectedCountry(item.toLowerCase())}
              color={selectedCountry === item.toLowerCase() ? "error" : "default"} // Change color based on selection
              sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                cursor: "pointer",
                justifySelf: "center",
                width: "100%",
                bgcolor: selectedCountry === item.toLowerCase() ? "#4d75ecff" : "#fafafa", // Change background color on click
                color: "#212121", // Ensuring text color is blue
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Middle: Checkboxes */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 120 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          Target Age <span style={{ color: "#60A5FA", fontWeight: "normal" }}>(Optional)</span>
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="kids" checked={selectedAge === "kids"} onChange={handleCheckboxChange} />}
            label={<Typography sx={{ color: "#60A5FA" }}>Kids</Typography>}
          />
          <FormControlLabel
            control={<Checkbox name="adults" checked={selectedAge === "adults"} onChange={handleCheckboxChange} />}
            label={<Typography sx={{ color: "#60A5FA" }}>Adults</Typography>}
          />
        </FormGroup>
      </Box>

      {/* Right middle: Target Donation */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 160, gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          Target Donation
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton onClick={handleDecrement} color="primary">
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: "#60A5FA" }}>
            ${targetDonation}
          </Typography>
          <IconButton onClick={handleIncrement} color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Far right: Buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 240, mt: 2 }}>
        <Button sx={{ width: 150, color: "#60A5FA", borderColor: "#60A5FA" }} variant="outlined" startIcon={<RemoveIcon />}>
          Delete
        </Button>

        <Box sx={{ position: "relative", display: "flex" }}>
          <Button
            variant="contained"
            disabled={loading}
            endIcon={success ? <CheckIcon /> : <SendIcon />}
            onClick={OnPost}
            sx={{
              width: 150,
              bgcolor: success ? "success.main" : "#60A5FA",
              "&:hover": { bgcolor: success ? "success.dark" : "#3B82F6" }, // Darker blue shade on hover
              color: "white",
            }}
          >
            {success ? "Posted" : "Post"}
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: "success.main",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>

        <Button sx={{ width: 150, bgcolor: "#EF4444", color: "white" }} variant="contained">
          Schedule
        </Button>
      </Box>
    </Box>
  );
});

export default TargetForm;
