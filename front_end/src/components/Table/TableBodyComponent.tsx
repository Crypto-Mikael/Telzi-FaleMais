import {
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
} from "@mui/material";
import React from "react";

type Prop = {
  OriginsAndDestinys: Array<{
    id_origin_destiny: number;
    origin: { description: string };
    destiny: { description: string };
    value: number;
  }>;
  loading: boolean;
};

function TableBodyComponent({ OriginsAndDestinys, loading }: Prop) {
  return (
    <TableBody>
      {!loading ? (
        OriginsAndDestinys.map((row) => (
          <TableRow key={row.id_origin_destiny}>
            <TableCell>{row.origin.description}</TableCell>
            <TableCell>{row.destiny.description}</TableCell>
            <TableCell>{`R$ ${row.value}`}</TableCell>
          </TableRow>
        ))
      ) : (
        <CircularProgress />
      )}
    </TableBody>
  );
}

export default TableBodyComponent;
