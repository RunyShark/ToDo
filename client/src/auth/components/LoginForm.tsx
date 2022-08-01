import { Form, Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import "./styles/styles.css";

import { MyTextinput } from ".";
import { Grid, Button, Link } from "@mui/material";
import { Login } from "@mui/icons-material";

export const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("El email debe de tener un formato valido")
            .required("Correo electrónico es un campo requerido"),
          password: yup
            .string()
            .min(6, "Contraseña debe de tener mas de 6 caracteres")
            .max(20, "Contraseña debe de menos de 20 caracteres")
            .required("Contraseña es un campo requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextinput
              label="Correo"
              name="email"
              placeholder="Correo electrónico"
              type="email"
              fullWidth
            />

            <MyTextinput
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Escribe tu contraseña"
              fullWidth
            />

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth type="submit">
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
              <Grid container direction="row" justifyContent="end">
                <Grid item sx={{ mt: 2 }}>
                  ¿No tienes cuenta?{" "}
                  <Link
                    component={RouterLink}
                    color="inherit"
                    to="/auth/register"
                  >
                    <span>crear una</span>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
