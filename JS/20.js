//metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ID: ${id} `)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlayList: function(nombre){
        console.log(`Creando la playlist${nombre}`)
    },
    reproducirPlayList: function(nombre){
        console.log(`reproduciendo la playlist${nombre}`)
    },
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Rock');
reproductor.reproducirPlayList('Rock');