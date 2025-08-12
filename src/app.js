
//pronombres
let pronoum =["el", "la", "los", "las"];
//adjetivos
let adj = ["gran", "pequeño", "rápido", "lento"];
//sustantivos
let noun = ["perro", "gato", "ratón", "elefante", "peces"];

//extensiones
let extensions = [".com", ".net", ".org", ".info", ".es"];

for (let p of pronoum) {
  for (let a of adj){
    for (let n of noun){
      for (let e of extensions){
        console.log(p + a + n + e);
    
        // domain hack si el nombre termina con la extension sin el punto reemplaza la extension por esas letras
        if (n.endsWith(e.slice(1))) {
          let nombreSinExtension = n.slice(0, -e.slice(1).length);
          console.log("Domain hack: " + p + a + nombreSinExtension + e);
        }
      }
    }
  }
}




