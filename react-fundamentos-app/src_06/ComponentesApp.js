import React from 'react'

const persona = {

    nombre = 'fabian',
    apellido ='oliveros',
    email ='hectorf.oliver@hotmail.com'
}

const ComponentesApp = () => {
    console.log('Componente multilinea');

    const ComponentesApp = ({ parm01, parm02, parm03 = 'SIN VALOR' }) => {
        console.log('cOMPONETES VARIOS PARAMETROS');
        console.log('Parametro 1:', parm01);
        console.log('Parametro 1:', parm02);
        console.log('Parametro 1:', parm03);

        return (
            <>
                <h1>saludo desde funcional component's </h1>
                <h5>retorno multilinea de un Componente</h5>
                <hr></hr>
                <p>esta es una conffiguracion para un componente multilinea</p>
                <hr></hr>
                <p>Objeto persona: {persona.nombre}{persona.apellido}</p>
                <p>email: {persona.email}</p>
                <p>{JSON.stringify(persona, null, null)}</p>


            </>


        );





    }


}

export default ComponentesApp;