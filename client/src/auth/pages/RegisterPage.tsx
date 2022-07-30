import { Link as RouterLink } from "react-router-dom";
import { TextField, Grid, Button, Link } from "@mui/material";
import { AuthLayout } from "../../index";
import { HowToReg } from "@mui/icons-material";
export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="email"
              placeholder="Escribe tu nombre"
              fullWidth
            />
          </Grid>
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
              type="email"
              placeholder="Escribe una contraseña"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="email"
              placeholder="Repite tu contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                <HowToReg />
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
