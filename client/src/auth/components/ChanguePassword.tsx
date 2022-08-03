import { Form, Formik } from "formik";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./styles/styles.css";
import { useAuth } from "../../index";
import { MyTextinput } from ".";
import { Grid, Button, Link } from "@mui/material";
import { Login } from "@mui/icons-material";

export const ChanguePassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const { startChanguePassword } = useAuth();

  return (
    <div>
      <Formik
        initialValues={{
          token: token,
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          startChanguePassword(values);
          navigate("/");
        }}
        validationSchema={yup.object({
          password: yup
            .string()
            .min(6, "Contraseña debe de tener mas de 6 caracteres")
            .max(20, "Contraseña debe de menos de 20 caracteres")
            .required("Contraseña es un campo requerido"),
          confirmPassword: yup
            .string()
            .min(6, "Contraseña debe de tener mas de 6 caracteres")
            .max(20, "Contraseña debe de menos de 20 caracteres")
            .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
            .required("Contraseña es un campo requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextinput
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Escribe tu contraseña"
              fullWidth
            />

            <MyTextinput
              label="Contraseña"
              name="confirmPassword"
              type="password"
              placeholder="Confirma tu contraseña"
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
                ¿No tienes cuenta?{" "}
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  <span>crear una</span>
                </Link>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Grid item sx={{ mt: 2 }}>
                  ¿Recordaste tu contrseña?{" "}
                  <Link component={RouterLink} color="inherit" to="/auth/login">
                    <span> inicia sesión </span>
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
