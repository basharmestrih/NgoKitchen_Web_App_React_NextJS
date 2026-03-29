import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

  useImperativeHandle(ref, () => ({
    getFilters: () => ({ countries: country, ageGroup: selected }),
  }));

  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        position: { xs: "relative", md: "sticky" },
        top: { md: 20 },
        p: { xs: 2, md: 4 },
        mb: { xs: 4, md: 0 },
        borderRadius: 4,
        backgroundColor: "white",
        border: "1px solid #e2e8f0",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: "#1e293b" }}>
        FILTER POSTS
      </Typography>

      {/* Countries */}
      <Box mb={3}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>By Country:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {countries.map((item) => (
            <Chip
              key={item}
              label={item}
              onClick={() => handleClick(item)}
              color={country.includes(item) ? "primary" : "default"}
              variant={country.includes(item) ? "filled" : "outlined"}
              size="small"
              sx={{ fontWeight: "bold" }}
            />
          ))}
        </Box>
      </Box>

      <Divider />

      {/* Age & Donation - Stack on small screens */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", md: "column" }, gap: 3, mt: 3 }}>
        <Box flex={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Target Age:</Typography>
          <FormGroup>
            {ageGroups.map((group) => (
              <FormControlLabel
                key={group}
                control={<Checkbox checked={selected === group} onChange={handleSetAgeGroups} name={group} size="small" />}
                label={group}
              />
            ))}
          </FormGroup>
        </Box>

        <Box flex={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Min Donation: ${donation}</Typography>
          <Slider
            value={donation}
            onChange={(e, val) => setDonation(val)}
            min={0}
            max={1000}
            sx={{ mt: 1 }}
          />
        </Box>
      </Box>

      {/* Actions */}
      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Typography onClick={() => window.location.reload()} sx={{ cursor: 'pointer', color: 'gray', fontWeight: 700 }}>
          Reset
        </Typography>
        <Typography onClick={onApply} sx={{ cursor: 'pointer', color: '#3B82F6', fontWeight: 900 }}>
          Apply Filters
        </Typography>
      </Box>
    </Paper>
  );
});

export default PostFilters;
