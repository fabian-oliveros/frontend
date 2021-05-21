import React, { useState } from 'react'

console.log('componente contador acumulador' );



const ContadorApp = ({valor_contador}) => {
    console.log('.:ContadorApp:.' );


    const [contador, setContador] = useState(valor_contador)

    const contClic = () => {
        setContador(contador + 1)
        console.log('contador =', contador);
    }
 
    return (
        <>
            <h1>eventos componentes </h1>
            <h5>acumulador clic</h5>
            <hr></hr>
            <h1>contador ={contador}</h1>
            <hr></hr>
            <button onClick={contClic}>contar +1</button> 

        </>


    );

}


export default ContadorApp;