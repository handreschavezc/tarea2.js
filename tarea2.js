//EJERCICIO 1.


function eliminarMascota(mascota)
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];
	
	

	var id_mascota = mascotas.indexOf(mascota);
	
	if (id_mascota > -1) {
 		  mascotas.splice(id_mascota, 1);
		}

	return mascotas;

}

function eliminarUltimaMascota()
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];

	mascotas.pop();

	return mascotas;
}

function agregarMascota(mascota)
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];

	mascotas.push(mascota);

	return mascotas;
}

function contadorMascotas()
{
	var mascotas = ['perros','gatos','canarios','pez','serpiente'];
	var cantidadMascotasTerminaOs = 0;

	for (i=0; i < mascotas.length; i++)
	{
		if(mascotas[i].slice(-2) =='os')
		{
			
			console.log("cacas");
			console.log(mascotas.length);
			cantidadMascotasTerminaOs ++;
		}
	}


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
    obtenerComuna: function(){
    	return () => console.log(`${this.ubicacion.comuna}`)
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

 function trabajadorTipoDos(Object trabajador)
 {
	String mensaje ="El trabajador " + nombreCompleto + "va a su trabajo en " + obtenerComuna + ", es (QA), en el puesto (nº 24), trabaja con (Facebook) y (Google)";
	return mensaje;
 }	

