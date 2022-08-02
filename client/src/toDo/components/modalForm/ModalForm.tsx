import { Form, Formik } from "formik";
import * as yup from "yup";

import { MyTextinput, MyChechBox, MyDate } from "../";
import { Grid, Button } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { useUIModal, useTaks } from "../../../index";

export const ModalForm = () => {
  const { modalClose } = useUIModal();
  const { startSaveTaks, startGetTask } = useTaks();

  return (
    <div>
      <Formik
        initialValues={{
          dateEnd: "",
          title: "",
          text: "",
          important: false,
        }}
        onSubmit={async (value) => {
          await startSaveTaks(value);
          modalClose();
          startGetTask();
        }}
        validationSchema={yup.object({
          dateEnd: yup
            .date()
            .required("La fecha de finalización es obligatoria"),
          title: yup
            .string()
            .min(3, "El titulo debe de tener un minimo de 3 caracteres")
            .max(20, "El titulo no puede tener mas de 20 caracteres")
            .required("Titulo es un campo requerido"),
          text: yup
            .string()
            .min(3, "La descripcion debe de tener un minimo de 3 caracteres")
            .max(200, "La descripcion no puede tener mas de 200 caracteres")
            .required("Descripcion es un campo requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <Grid container direction="row" justifyContent="end">
              <MyDate name="dateEnd" />
            </Grid>

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
                Guardar
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
