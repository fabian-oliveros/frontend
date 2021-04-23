console.log('+------------------objetos-----------------+');


const persona = {

    nombre: 'hector ',
    apellido: 'oliveros',
    fechaNacimiento: '1999-03-09',

    direccion: {
        viaPincipal: 'carrera',
        numero: '109',
        barrio: 'aguamarina',


        
      
    },
    autos:{
        o:'a'
    }
    

    
};
console.table(persona);


let otrapersona={...persona}
otrapersona.nombre= 'carlos '
otrapersona.apellido= 'lozada  '
otrapersona.fechaNacimiento='1999-08-06'


console.log('+---------------------+');
console.table(persona);

console.table(otrapersona);

console.log('++++++++++++++objetoDinamico+++++++++++++')

const personaDinamica = {

    nombre: 'hector ',
    apellido: 'oliveros',
    fechaNacimiento: '1999-03-09',

    direccion: {
        viaPincipal: 'carrera',
        numero: '109',
        barrio: 'aguamarina',
        comuba:'8'      
    },

    fxNombreComleto(){
        console.log(`mi nombre completo es  ${this.nombre}${this.apellido}`)
    },
    fxtabularAtributos(){
        console.log(`mi nombre completo es  ${this.nombre}${this.apellido}`)
        console.table(this);

    }
};


let obj ={...personaDinamica};

obj.nombre = 'raul'
obj.apellido = 'silva'
obj.fxNombreComleto();
obj.fxtabularAtributos();
console.table(obj);

console.log('+++++++++++++fin+++++++++++++');

