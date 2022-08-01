import { Form, Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import "./styles/styles.css";

import { MyTextinput } from ".";
import { Grid, Button, Link } from "@mui/material";
import { Login } from "@mui/icons-material";

export const RecuperarPasswordForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("El Correo electrónico debe de tener un formato valido")
            .required(
              "Correo electrónico es un campo requerido para poder recuperar tu cuenta"
            ),
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
                ¿Ya tienes cuenta?{" "}
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  <span> inicia sesión </span>
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
