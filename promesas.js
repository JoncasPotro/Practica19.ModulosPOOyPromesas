function obtenerDatosDelServidor(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        let exito = true;

        if(exito){
            let usuario = {
                nombre: "Jonatan",
                edad: 32
            }
            resolve(usuario)
        }else{
            reject("Ocurrio un error al obtener los datos")
        }
    }, 2000)
})
}

obtenerDatosDelServidor()
.then(resp=>{
    return resp.nombre.toUpperCase();
})
.then(nombreEnMayus=>{
    console.log("Nombre en mayusculas: ", nombreEnMayus)
})
.catch(err=>{
    console.log("Entro en el .catch: ", err)
})
.finally(()=>{
    console.log("Fin de la tarea")
})

async function obtenerPosts(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response);
    }catch(error){

    } finally{

    }
}
obtenerPosts();