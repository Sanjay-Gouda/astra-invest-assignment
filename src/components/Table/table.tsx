"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/baseUrl";
import { Loader } from "../Loader/loader";
import { IUser } from "./TTable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const DataTable = () => {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user_data"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/users`);
      return await res.json();
    },
  });

  if (isLoading) return <Loader open={isLoading} />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Website</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData?.map((item: IUser) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell align="left">{item?.name}</StyledTableCell>
              <StyledTableCell align="right">{item?.email}</StyledTableCell>
              <StyledTableCell align="right">{item?.username}</StyledTableCell>
              <StyledTableCell align="right">{item?.phone}</StyledTableCell>
              <StyledTableCell align="right">{item?.website}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
