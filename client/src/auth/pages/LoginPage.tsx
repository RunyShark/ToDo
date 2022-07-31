import { Link as RouterLink } from "react-router-dom";
import { Login, Person } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";

import { AuthLayout } from "../../index";
export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo electrónico"
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
                Entrar
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item sx={{ mt: 2 }}>
              ¿Olvidaste tu contraseña?{" "}
              <Link
                component={RouterLink}
                color="inherit"
                to="/auth/recuperarCuenta"
              >
                <span> recuperar contraseña </span>
              </Link>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item sx={{ mt: 2 }}>
              ¿No tienes cuenta?{" "}
              <Link component={RouterLink} color="inherit" to="/auth/register">
                <span style={{ color: "blue" }}>crear una</span>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
