import React from 'react'


const persona = {

    nombre = 'fabian',
    apellido ='oliveros',
    email ='hectorf.oliver@hotmail.com'
}



const ComponentesApp = (props) => {
    console.log('cOMPONETES VARIOS PARAMETROS');
    console.log('Parametro 1:', props.parm01);
    console.log('Parametro 2:', props.parm02);
    console.log('Parametro 3:', props.parm03);

    return (
        <>
            <h1>saludo desde funcional component's </h1>
            <h5>multiparametrpox prod</h5>
            <hr></hr>
            <p>Parametro 1=  {props.parm01}</p>
            <p>Parametro 2=  {props.parm02}</p>
            <p>Parametro 3=  {props.parm03}</p>
            <hr></hr>
            <p>{JSON.stringify(persona, null, null)}</p>


        </>


    );

}

ComponentesApp.defaulProps ={
    parm03: 'sin valores'
}

export default ComponentesApp;