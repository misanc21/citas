import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //citas en local storage
  let  citasIniciales = JSON.parse(localStorage.getItem('citas'))
  !citasIniciales? citasIniciales = [] :citasIniciales = citasIniciales

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales)


  //useeffect para realiza operaciones cuando el state cambia 
  useEffect (()=>{
  localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])
  //

  const crearCita = cita => {
    guardarCitas ([
      ...citas,
      cita
    ])
  }

  //funcion que elimina cita por su id
  const eliminarCita = id =>{
    guardarCitas(citas.filter(cita => cita.id !== id))
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h3>{citas.length === 0 ? 'No hay citas ': 'Administra tus citas'}</h3>
            {citas.map(cita =>(
              <Cita
                key={cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
              />)
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
