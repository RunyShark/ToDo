import { useRef } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
// import "./styles/styles.css";
import { useAuth } from "../../index";
import { MyTextInputUser } from ".";
import {
  Grid,
  Button,
  Link,
  IconButton,
  TextField,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import {
  AddPhotoAlternateOutlined,
  AssignmentReturnOutlined,
  Login,
} from "@mui/icons-material";

export const UpdatePerfil = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { user, startEditName } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const onFileInputChange = ({ target }: { target: any }) => {
    const { files } = target;
    if (files === 0) return;
    //dispatch(startUploadingFiles(files));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          //img: "",
        }}
        onSubmit={(values) => {
          startEditName(values);
          //handleClick();
        }}
        validationSchema={yup.object({
          name: yup
            .string()
            .min(3, "El nombre debe de tener mas de 3 caracteres")
            .max(20, "El nombre no puede tener mas de 20 caracates")
            .required("Para actualizar el nombre, el campo es requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <Grid
              className="animate__animated animate__fadeIn"
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                minHeight: "calc(100vh - 110px)",
                backgroundColor: "primary.main",
                borderRadius: 5,
              }}
            >
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <ImageList
                    sx={{
                      width: 200,
                      height: 200,
                      transform: "translateZ(0)",
                      borderRadius: 100,
                    }}
                  >
                    <ImageListItem cols={6} rows={2}>
                      <img
                        src="https://i0.wp.com/www.oinkoink.com.mx/wp-content/uploads/2020/06/fotos-camara-e1592237329551.jpg?resize=1200%2C720&ssl=1"
                        alt="img"
                        loading="lazy"
                      />
                    </ImageListItem>
                  </ImageList>
                </Grid>
                <Grid
                  item
                  className="box-shadow"
                  xs={8}
                  sx={{
                    width: { md: 600 },
                    backgroundColor: "white",
                    padding: 4,
                    borderRadius: 2,
                  }}
                >
                  <Grid container justifyContent="end">
                    <input
                      type="file"
                      multiple
                      onChange={onFileInputChange}
                      //style={{ display: "none" }}
                      //ref={inputRef}
                    />
                    {/* <IconButton
                      onClick={() => inputRef.current.click()}
                      //   disabled={isSaving}
                    > */}
                    <AddPhotoAlternateOutlined />
                    {/* </IconButton> */}
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Typography>Editar nombre</Typography>
                    <MyTextInputUser
                      label={user.name}
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      fullWidth
                    />

                    {/* <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Editar contraseña"
                  type="email"
                  placeholder="Correo electronico"
                  fullWidth
                />
              </Grid> */}
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                      <Grid item xs={12}>
                        <Button variant="contained" fullWidth type="submit">
                          Enviar
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="start">
                    <Button color="primary" onClick={handleClick}>
                      <AssignmentReturnOutlined />
                      Volver
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
