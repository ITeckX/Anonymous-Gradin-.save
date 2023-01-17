import { useState } from "react";
// material
import { Typography, TableRow, TableCell, TableHead } from "@mui/material";

// components

// ----------------------------------------------------------------------

export default function PRHead() {
  return (
    <TableHead>
      <TableRow
        sx={{
          height: "4rem",
        }}
      >
        <TableCell
          align="left"
          component="th"
          scope="row"
          padding="none"
          sx={{
            width: { xl: "26rem", lg: "20rem" },
          }}
        >
          <Typography
            noWrap
            style={{ fontWeight: 500, fontSize: 16, marginRight: "0.35rem" }}
          >
            Nume Proiect
          </Typography>
        </TableCell>

        <TableCell
          align="left"
          component="th"
          scope="row"
          padding="none"
          sx={{
            width: { xl: "18rem", lg: "12rem" },
          }}
        >
          <Typography noWrap style={{ fontWeight: 500, fontSize: 16 }}>
            Link Proiect
          </Typography>
        </TableCell>

        <TableCell
          align="left"
          component="th"
          scope="row"
          padding="none"
          sx={{
            width: { xl: "15rem", lg: "10rem" },
          }}
        >
          <Typography noWrap style={{ fontWeight: 500, fontSize: 16 }}>
            Autor
          </Typography>
        </TableCell>

        <TableCell
          align="left"
          component="th"
          scope="row"
          padding="none"
          sx={{
            width: { xl: "10rem", lg: "8rem" },
            padding: 0,
          }}
        >
          <Typography noWrap style={{ fontWeight: 500, fontSize: 16 }}>
            Nota din 10.00
          </Typography>
        </TableCell>

        <TableCell
          align="left"
          component="th"
          scope="row"
          padding="none"
          sx={{
            padding: 0,
          }}
        >
          <Typography
            noWrap
            style={{ fontWeight: 500, fontSize: 16, marginRight: "0.35rem" }}
          >
            Adaugare Nota
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
