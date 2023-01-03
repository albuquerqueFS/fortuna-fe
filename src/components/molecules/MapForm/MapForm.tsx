import { Box, Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const MapContainer = styled(Grid)(({ theme }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export function MapForm() {
  return (
    <MapContainer container>
      <Grid>
        <TextField id="partida" label="Ponto de partida" variant="standard" />
      </Grid>
      <Grid>
        <TextField id="destino" label="Ponto de destino" variant="standard" />
      </Grid>
      <Grid>
        <Button variant="outlined">Traçar rota</Button>
      </Grid>
    </MapContainer>
  );
}
