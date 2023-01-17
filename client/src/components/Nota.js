import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  Grid,
  Button,
  DialogTitle,
  TextField,
} from "@mui/material";

// components

export default function SteaLoggedOut({ stateLogin }) {
  const [open, setOpen] = useState(false);
  //   const { client_id, redirect_uri } = stateLogin;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Adauga
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: "#EEF4F5",
          }}
        >
          {"Adauga nota de la 1.00 la 10.00:"}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#FFFFFF",
            height: "16rem",
            width: "26rem",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <TextField
                id="nota"
                label="nota"
                fullWidth
                style={{
                  marginTop: "3rem",
                  width: "10rem",
                  marginLeft: "5rem",
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  color: "#000000",
                  width: "18rem",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#000000",
                  },
                }}
                onClick={handleClose}
              >
                Adauga
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
