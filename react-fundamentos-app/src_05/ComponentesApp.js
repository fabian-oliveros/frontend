import React from 'react'

const persona = {

    nombre = 'fabian ',
    apellido ='oliveros',
    email ='hectorf.oliver@hotmail.com'
}

const ComponentesApp= () =>{
console.log('Componente multilinea');

return(
<>
<h1>saludo desde funcional component's </h1>
<h5>retorno multilinea de un Componente</h5>
<hr></hr>
<p>esta es una conffiguracion para un componente multilinea</p>
<hr></hr>
<p>Objeto persona: {persona.nombre}{persona.apellido}</p>
<p>email: {persona.email}</p>
<p>{JSON.stringify(persona,null,null)}</p>


</>


);






}

export default ComponentesApp;