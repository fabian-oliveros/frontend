import React from 'react'




const ComponentesApp = () => {
    console.log('.:ComponentesApp:.' );

    const eventoClic =(e)=>{
        console.log(e);
    }
 
    return (
        <>
            <h1>eventos componentes </h1>
            <h5>capturador clic</h5>
            <hr></hr>
            <button onClick={eventoClic}>clic Aqui</button> 

        </>


    );

}


export default ComponentesApp;