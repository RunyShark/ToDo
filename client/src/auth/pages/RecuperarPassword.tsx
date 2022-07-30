import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../../index";

export const RecuperarPassword = () => {
  return (
    <AuthLayout title="Recuperar contraseña">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo electrónico"
              type="email"
              placeholder="Correo electronico"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Repite tu correo electrónico"
              type="email"
              placeholder="Correo electronico"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item sx={{ mt: 2 }}>
              ¿Ya tienes cuenta?{" "}
              <Link component={RouterLink} color="inherit" to="/auth/login">
                <span> inicia sesión </span>
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
