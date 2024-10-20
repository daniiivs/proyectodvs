import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

function Login() {
  return (
    <>
      <Container role="main">
        <Typography variant="h1" color="primary">Página Login de Daniel Viera Santana</Typography>
        <Typography variant="h2" color="secondary">Esto es un texto tipo h2</Typography>
        <Typography variant="h3">Esto es un texto tipo h3</Typography>
        <Typography variant="subtitle1" color="primary">Esto es un subtitle1</Typography>
        <Typography variant="body1">Esto es un body1</Typography>
        <Typography variant="caption">Esto es un caption</Typography>
        <br />
        <Button variant="contained">Botón contained</Button>
        <Button variant="outlined" color="secondary">Botón outlined</Button>
        <Button variant="text" color="secondary">Botón text</Button>
        <br /><br />
        <Grid container spacing={1}>
          <Grid size={6}>
            <Button fullWidth variant="contained" color="error">Botón error</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="outlined" color="error">Botón error</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="contained" color="warning">Botón warning</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="outlined" color="warning">Botón warning</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="contained" color="info">Botón info</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="outlined" color="info">Botón info</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="contained" color="success">Botón success</Button>
          </Grid>
          <Grid size={6}>
            <Button fullWidth variant="outlined" color="success">Botón success</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;