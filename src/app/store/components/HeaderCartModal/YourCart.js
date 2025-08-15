import * as React from "react";
import {
  Dialog,
  Slide,
  IconButton,
  Typography,
  Grid,
  Box,
  Avatar,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Appa({ isOpen, onClose, cart, deletecart, updateQuantity, total }) {
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          bgcolor: "white",
          fontFamily: "'Segoe UI', sans-serif",
          p: 4,
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Your Cart
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "black" }}>
          <CloseIcon />
        </IconButton>
      </Box>

<Box sx={{ display: "flex", gap: 4, px: 2, flexdirection:"row" }}>
  {/* Left: Cart Items - 60% */}
  <Box sx={{ flex: "1 1 60%", minWidth: "300px" }}>
    {cart.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: 4,
          mb: 4,
          px: 2,
          borderRadius: 2,
          padding: 2,
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* Product Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2,width:400 }}>
          <Avatar src={item.image} variant="square" sx={{ width: 150, height: 150 }} />
          <Typography>{item.title}</Typography>
        </Box>

        {/* Price */}
        <Typography sx={{ flex: 1 }}>${item.price}</Typography>

        {/* Quantity Controls */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "50px",
            px: 1,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => updateQuantity(index, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </Button>
          <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
          <Button onClick={() => updateQuantity(index, item.quantity + 1)}>+</Button>
        </Box>

        {/* Total and Delete */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1, justifyContent: "end" }}>
          <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
          <IconButton onClick={() => deletecart(index)}>❌</IconButton>
        </Box>
      </Box>
    ))}
  </Box>

  {/* Right: Cart Summary - 40% */}
  <Box sx={{ flex: "1 1 38%", minWidth: "300px" ,height:"400px"}}>
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 3,
        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Cart Total
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography>Total:</Typography>
        <Typography>${total.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography>Shipping:</Typography>
        <Typography>Free</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography fontWeight="bold">Subtotal:</Typography>
        <Typography fontWeight="bold">${total.toFixed(2)}</Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "green",
          color: "white",
          fontWeight: "bold",
          borderRadius: "50px",
          py: 1.5,
          "&:hover": {
            bgcolor: "#028a0f",
          },
        }}
      >
        Proceed to checkout
      </Button>
    </Box>
  </Box>
</Box>

    
    </Dialog>
  );
}
