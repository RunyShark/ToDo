import { Form, Formik } from "formik";
import * as yup from "yup";

import { MyTextinput, MyChechBox, MyDate } from "..";
import { Grid, Button } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { useUIModal } from "../../../index/index";

export const ModalFormUpdate = () => {
  const { modalClose } = useUIModal();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          text: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          //recoverPassword(values);
          modalClose();
        }}
        validationSchema={yup.object({
          dateEnd: yup
            .date()
            .required("La fecha de finalización es obligatoria"),
          title: yup
            .string()
            .required(
              "Correo electrónico es un campo requerido para poder recuperar tu cuenta"
            ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextinput
              label="Titulo de la tarea"
              type="text"
              name="title"
              placeholder="ingresa el titulo"
            />

            <MyTextinput
              label="Tarea"
              type="text"
              name="text"
              multiline
              minRows={4}
              placeholder="Descripcion"
            />
            <MyChechBox label="Importante" name="important" />
            <Grid item>
              <Button color="primary" sx={{ padding: 2 }} type="submit">
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Actualizar
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
