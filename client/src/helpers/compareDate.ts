export const compareDate = (dateNow: any) => {
  console.log(dateNow);
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const nuevaFecha = new Date().getTime();

  const nowDate = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
  }).format(nuevaFecha);

  const dateTakss = dateNow
    .map((taks: any) => {
      let time = nowDate.split(" ");
      const dateNowToday = time[4];
      const taksAge = taks.dateEnd.split(" ")[4];

      const dateMoth = time[2];
      const dateMothPosition = meses.indexOf(dateMoth) + 1;
      const taksMonth = taks.dateEnd.split(" ")[2];
      const taksMonthPosition = meses.indexOf(taksMonth) + 1;

      const dateToday = time[0];
      const taksToday = taks.dateEnd.split(" ")[0];

      if (dateNowToday > taksAge) {
        return taks;
      }

      if (dateMothPosition > taksMonthPosition) {
        return taks;
      }
      if (taksMonthPosition > dateMothPosition) {
        return "expirado";
      }

      if (Number(dateToday) > Number(taksToday)) {
        return taks;
      }

      return "expirado";
    })
    .filter((e: any) => e !== "expirado");
  return dateTakss;
};
