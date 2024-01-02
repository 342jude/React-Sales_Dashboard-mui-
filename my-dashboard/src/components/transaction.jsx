import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { mockTransactions } from "../data/mockData";

function Transaction() {
  return (
    <div>
      <Typography variant="h6" component="h2" gutterBottom>
        Transactions
      </Typography>

      <TableContainer component={Paper} style={{ maxHeight: 300 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>txId</TableCell>
              <TableCell>user</TableCell>
              <TableCell>date</TableCell>
              <TableCell>cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTransactions.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.txId}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Transaction;
