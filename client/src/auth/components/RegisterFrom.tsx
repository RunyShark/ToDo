import { Form, Formik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";

import { Grid, Button, Link } from "@mui/material";
import { Login } from "@mui/icons-material";

import "./styles/styles.css";

import { useAuth, MyTextinputAuth } from "../../index";

export const RegisterFrom = () => {
  const { startRegister } = useAuth();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          startRegister(values);
        }}
        validationSchema={yup.object({
          name: yup
            .string()
            .min(3, "El nombre debe de tener minimo 3 caracteres")
            .max(20, "El nombre debe de tener maximo 20 caracteres")
            .required("Correo electrónico es un campo requerido"),
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
            <MyTextinputAuth
              label="Nombre"
              name="name"
              placeholder="Escribe tu nombre"
              type="text"
              fullWidth
            />
            <MyTextinputAuth
              label="Correo"
              name="email"
              placeholder="Correo electrónico"
              type="email"
              fullWidth
            />

            <MyTextinputAuth
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
                ¿Ya tienes cuenta?{" "}
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  <span> inicia sesión </span>
                </Link>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
