export const conversDateTodo = (fecha: any) => {
  return fecha.map((fecha: any) => {
    const {
      _id,
      active,
      dateEnd,
      dateStart,
      deleted,
      important,
      text,
      title,
      user,
    } = fecha;
    const startFecha = new Date(fecha.dateStart);
    const endFecha = new Date(fecha.dateEnd);

    const fechaStart = new Intl.DateTimeFormat("es-MX", {
      dateStyle: "long",
    }).format(startFecha);
    const fechaEnd = new Intl.DateTimeFormat("es-MX", {
      dateStyle: "long",
    }).format(endFecha);

    const obj = {
      _id,
      active,
      dateEnd: fechaEnd,
      dateStart: fechaStart,
      deleted,
      important,
      text,
      title,
      user,
    };

    return obj;
  });
};
