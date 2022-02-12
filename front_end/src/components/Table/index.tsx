/* eslint-disable react/jsx-fragments */
import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import TableBodyComponent from "./TableBodyComponent";
import SelectInput from "./SelectInput";
import TableRowData from "./types";

function DDDTable() {
  const [OriginsAndDestinys, setOriginsAndDestinys] = useState<TableRowData[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  const getOriginDestinyData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/OriginDestiny");
      const { data } = response;
      setOriginsAndDestinys(data);
      setLoading(false);
      return true;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getOriginDestinyData();
  }, []);

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Box sx={{ m: 10 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead
              sx={{
                backgroundColor: "primary.light",
              }}
            >
              <TableRow>
                <TableCell>DDD | Origem</TableCell>
                <TableCell>DDD | Destino</TableCell>
                <TableCell>valor/min</TableCell>
              </TableRow>
            </TableHead>
            <TableBodyComponent
              OriginsAndDestinys={OriginsAndDestinys}
              loading={loading}
            />
          </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ marginTop: 5 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "primary.light" }}>
              <TableRow>
                <TableCell>DDD | Origem</TableCell>
                <TableCell>DDD | Destino</TableCell>
                <TableCell>Tempo/min</TableCell>
                <TableCell>Plano FaleMais</TableCell>
                <TableCell>Com FaleMais</TableCell>
                <TableCell>Sem FaleMais</TableCell>
              </TableRow>
            </TableHead>
            <SelectInput OriginsAndDestinys={OriginsAndDestinys} />
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default DDDTable;
