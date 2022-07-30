import { Login, Person } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }} textAlign="center">
          <Person />
          Iniciar sesión
        </Typography>
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo electronico"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Escribe tu contraseña"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  <Login />
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Grid item sx={{ mt: 2 }}>
                ¿Olvidaste tu contraseña?{" "}
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  <span> recuperar contraseña </span>
                </Link>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Grid item sx={{ mt: 2 }}>
                ¿No tienes cuenta?{" "}
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  <span style={{ color: "blue" }}>crear una</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
