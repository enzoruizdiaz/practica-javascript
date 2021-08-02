//promises

const usuarioAutenticado = new Promise( (resolve,reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); // se cumple
    } else {
        reject('No se pudo iniciar sesion'); // no se cumple

    }
});
usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// en promise existen 3 valores
// pending : no se ha cumplido pero tampoco se ha rechazado
// fulfilled: ya se cumplio
//reject: se ha rechazado

