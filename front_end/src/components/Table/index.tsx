import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  CircularProgress,
  TableBody,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRowData from "./types";

function DDDTable() {
  const [api, setApi] = useState<TableRowData[]>([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/OriginDestiny");
      setApi(data);
      setLoading(false);
      return true;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getApiData();
  }, [api]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Origem</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell>Sem plano</TableCell>
            <TableCell>Com plano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading ? (
            api.map((row) => (
              <TableRow key={row.id_origin_destiny}>
                <TableCell>{row.origin.description}</TableCell>
                <TableCell>{row.destiny.description}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))
          ) : (
            <CircularProgress />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DDDTable;
