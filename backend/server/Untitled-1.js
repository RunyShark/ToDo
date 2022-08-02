const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]





const formaterFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  let dateFins = "31 de diciembre de 1999".split(" ")
  console.log(dateFins);
  const hoy = new Date().getTime()
let res =  formaterFecha(hoy)

const añoDeHoy = res.split(" ")[4]
const añoDetaks = dateFins[4]
console.log(añoDetaks);
console.log(añoDeHoy);

console.log(Number(añoDeHoy) === Number(añoDetaks));








const mesDeHoy = res.split(" ")[2]
const mesDetaks = dateFins[2]
const mesHoy = meses.indexOf(mesDeHoy)
const mesTaks = meses.indexOf(mesDetaks)
console.log(mesTaks);
console.log(mesHoy);



const diaDeHoy = res.split(" ")[0]
const diaDetaks = dateFins[0]
console.log(diaDetaks);
console.log(diaDeHoy);




if( Number(añoDetaks) >= Number(añoDeHoy) && mesDetaks >= mesDeHoy&&diaDetaks>=diaDeHoy){
    console.log("true");
}else{
    console.log("false");
}