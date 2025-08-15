import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Typography,
  Paper,
  Box,
  Divider,
  Slider,
  FormGroup,
  FormControlLabel,
  Chip,
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CheckIcon from "@mui/icons-material/Check";
import { useCountryHook } from "./hooks/useCountryHook.js";
import { useAgeHook } from "./hooks/useAgeHook.js";

const BpCheckbox = styled((props) => <Checkbox {...props} />)(({ theme }) => ({
  color: theme.palette.grey[400],
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '&.Mui-disabled': {
    color: theme.palette.action.disabled,
  },
}));


const ngos = ["UNICEF", "Red Cross", "Save the Children", "WHO"];
const ageGroups = ["kids", "adults", "Elderly People"];
const countries = ["SYRIA", "TURKEY", "CONGO", "LEBANON", "UAE","PALESTINE","SOMALIA","MYANMAR"];


const PostFilters = forwardRef(({ onApply }, ref) => {
  const [donation, setDonation] = useState(100);
    const { country, handleClick } = useCountryHook();

  const { selected, handleSetAgeGroups } = useAgeHook();
   // Expose the selected filters to parent via ref
  useImperativeHandle(ref, () => ({
    getFilters: () => ({
      countries: country,
      ageGroup: selected,
    }),
  }));

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 550,
        height:565,
        position: "sticky",
        zIndex: 10,
        top: 20,
        p: 4,
        ml: 8,
        
        borderRadius: 3,
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Filter by Country */}
      <Box mb={1}>
        <Typography variant="h6" gutterBottom>
          Filter posts by target country:
        </Typography>
       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {countries.map((item) => (
        <Chip
          key={item}
          icon={<FlagCircleIcon />}
          label={item}
          clickable
          onClick={() => handleClick(item)}

          color={country.includes(item) ? "error" : "info"}
        />
      ))}
    </Box>
  
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* NGOs */}
      <Box mb={1} mt={5}
      >
        <Typography variant="h6" gutterBottom>
          Filter by NGOs:
        </Typography>
        <BpCheckbox  />   UNICEF
         <BpCheckbox  />   NRC
          <BpCheckbox  />   DRC
           <BpCheckbox  />   EMPA
            <BpCheckbox  />   MIMT
      </Box>
      <Divider sx={{ my: 2 }} />
      {/* Target Age + Donation Slider */}
<Box mb={1} display="flex" justifyContent="space-between" alignItems="flex-start">
  {/* Target Age */}
  <Box>
    <Typography variant="h6" gutterBottom>
      Target Age:
    </Typography>
    <FormGroup>
      {ageGroups.map((group) => (
        <FormControlLabel
          key={group}
          control={
            <Checkbox
              name={group}
              color="error"
              checked={selected === group}
              onChange={handleSetAgeGroups}
            />
          }
          label={group}
        />
      ))}
    </FormGroup>
  </Box>
  {/* Donation + Buttons */}
  <Box>
    <Typography variant="h6" gutterBottom>
      Filter by Target Donation:
    </Typography>
    <Box display="flex" alignItems="center" gap={2}>
      <Slider
        value={donation}
        onChange={(e, val) => setDonation(val)}
        min={0}
        max={1000}
        sx={{ width: 150 }}
      />
      <Typography variant="body2" sx={{ minWidth: 40 }}>
        ${donation}
      </Typography>
    </Box>
  </Box>
</Box>
 {/* Text Buttons */}
    <Box mt={4} display="flex" justifyContent="flex-end" gap={4} mr={10}>
      <Typography
        sx={{
          cursor: 'pointer',
          color: 'text.secondary',
          fontWeight: 'bold',
          fontSize:'18px',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        Cancel
      </Typography>
      <Typography
        sx={{
          cursor: 'pointer',
          color: 'primary.main',
          fontSize:'18px',
          fontWeight: 'bold',
          '&:hover': { textDecoration: 'underline' },
        }}
          onClick={onApply}
      >
        Apply
      </Typography>
    </Box>

    </Paper>
  );
});
export default PostFilters;
