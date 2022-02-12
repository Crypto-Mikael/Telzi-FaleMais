import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import DDDTable from "./components/Table";

/**
 * Página inicial do App
 */

function App() {
  return (
    <div className="App">
      <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
        <Grid item>
          <DDDTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
