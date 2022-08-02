const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]


const compareDate = (dateNow) => {
    const nuevaFecha = new Date().getTime()
    const nowDate = new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
        nuevaFecha
      );
    const dateNow = dateTaks.split(" ")

    const ageTaks = taksDate[4]
    const ageToday = nowDate.split(" ")[4]
 
    const monthTaks =  taksDate[2]
    const todayMonth = nowDate.split(" ")[2]

    const todayTaks= taksDate[0]
    const tody = nowDate.split(" ")[0]

    if( Number(añoDetaks) >= Number(añoDeHoy) && mesDetaks >= mesDeHoy&&diaDetaks>=diaDeHoy){
        console.log("true");
    }else{
        console.log("false");
    }


}

let dateFins = "31 de diciembre de 1999"

console.log(compareDate(dateFins));