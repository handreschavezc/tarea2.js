//EJERCICIO 1.


function eliminarMascota(mascota)
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];
	var mascotas_eliminadas = [];
	
	

	return mascotas_eliminadas[];


}

function eliminarUltimaMascota()
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];
	var arreglo_eliminarUltimaMascota = [];


	return arreglo_eliminarUltimaMascota[];
}

function agregarMascota(mascota)
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];
	var arreglo_agregarUltimaMascota = [];


	return arreglo_agregarUltimaMascota[];
}

function contadorMascotas()
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];
	var cantidadMascotasTerminaOs = 0;

	console.log("En el arreglo hay:" + cantidadMascotasTerminaOs + " mascotas que terminan con 'os' ");
	
}





//EJERCICIO 2





const trabajador = {
        nombre: 'Jhon Smith',
        cargo: 'QA',
        empresa: {
            ubicacion: {
                comuna: 'Santiago',
                puesto: 'nº 24',
            },
            datos: {
                nombre: 'ACME',
            }
            clientes: ['Facebook', 'Google'],

        }
        gustos: ['comer', 'ver televisión', 'dormir']
        hijos: null,
        
    },

const {
    nombre,
    cargo,
    empresa: {
    	ubicacion:{
    		comuna,
    		puesto,

    	},
    	datos:{
    		nombre,
    	},
    	clientes: [primerElementoClientes, ...restoClientes]
    	},
    gustos: [primerElementoGustos, ...restoGustos],
    hijos: "no tiene hijos"
} = trabajador;


    nombreCompleto: function(){
    	return () => console.log(`${this.nombre}`)
    },
    obtenerCargo: function(){
    	return () => console.log(`${this.cargo}`)
    },
    obtenerUbicacionEmpresa: function()
    {
    	return () => console.log(`${this.comuna}`)	 
    }
    


 function trabajadorTipoUno(Object trabajador)
 {
 	String mensaje ="El trabajador " + nombreCompleto +" trabaja en " + obtenerUbicacionEmpresa + "con cargo " + obtenerCargo + " y le gusta "+  primerElementoGustos  + "y " + restoGustos + " mas, " + hijos;


 	return mensaje;
 }

