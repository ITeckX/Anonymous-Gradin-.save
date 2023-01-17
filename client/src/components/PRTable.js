import React, { useState, useContext, useRef } from "react";
import { faker } from "@faker-js/faker";
// @mui
//import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import Nota from './Nota';

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  Link,
  Button,
} from "@mui/material";

// components

import TableEmpty from "./TableEmpty";
import PRHead from "./PRHead";
import PRData from './PRData';

// assets

// const useStyles = makeStyles((theme) => ({
//   table: {
//     maxHeight: "40rem",
//   },
//   stea: {
//     marginBottom: "0.2rem",
//   },
//   projectElipsis: {
//     maxWidth: "32rem",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   },
// }));

export default function PRTable() {
  //const classes = useStyles();
  // const [data, setData] = useState([]);
  // const [tableEmpty, setTableEmpty] = useState(false);
  //   const tableEl = useRef();
  const tableEmpty=PRData.length===0;
  return (
    <>
      <TableContainer
        sx={{
          minWidth: 800,
        }}
        //className={classes.table}
        // ref={tableEl}
      >
        <Table
          stickyHeader
          sx={{
            "& .MuiTableRow-root:hover": {
              backgroundColor: alpha("#919EAB", 0.2),
            },
          }}
        >
          <PRHead />

          <TableBody>
            {PRData.map((row, index) => {
              const uniqueId = faker.datatype.uuid();
              const {  
                id,
                projectTitle,
                projectSubtitle,
                projectLink,
                personName,
                personLink,
                nota
              }=row;

              return (
                <TableRow hover key={uniqueId} tabIndex={-1}>
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Typography
                      variant="subtitle2"
                      noWrap
                      sx={{
                        maxWidth: { xl: "18rem", lg: "16rem" },
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {projectTitle}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Typography
                      variant="subtitle2"
                      noWrap
                      sx={{
                        maxWidth: "12rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      color="#65898F"
                    >
                      <Link
                        target="_blank"
                        rel="noopener"
                        href={projectLink}
                        color="inherit"
                        underline="none"
                      >
                        {projectSubtitle}
                      </Link>
                    </Typography>
                  </TableCell>

                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Typography variant="subtitle2" noWrap>
                      {personName}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    {nota}
                  </TableCell>

                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    {/* <Typography variant="subtitle2" noWrap>
                      Buton
                    </Typography> */}
                    <Nota/>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>

          {tableEmpty && (
            <TableBody>
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={7}
                  sx={{
                    py: 3,
                  }}
                >
                  <TableEmpty />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
