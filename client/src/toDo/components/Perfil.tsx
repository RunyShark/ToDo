import { useNavigate } from "react-router-dom";
import {
  AddPhotoAlternateOutlined,
  AssignmentReturnOutlined,
  KeyboardReturn,
} from "@mui/icons-material";
import {
  Grid,
  TextField,
  ImageList,
  ImageListItem,
  Link,
  IconButton,
} from "@mui/material";

import Button from "@mui/material/Button";

export const Perfil = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
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
            <IconButton>
              <AddPhotoAlternateOutlined />
            </IconButton>
          </Grid>

          <form action="">
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Editar nombre"
                  type="email"
                  placeholder="Nombre"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Editar correo"
                  type="email"
                  placeholder="Correo electronico"
                  fullWidth
                />
              </Grid>
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
                  <Button variant="contained" fullWidth>
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <Grid container justifyContent="start">
            <Button color="primary" onClick={handleClick}>
              <AssignmentReturnOutlined />
              Volver
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
