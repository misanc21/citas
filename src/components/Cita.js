import React from 'react'

const Cita = ({cita}) => {
    let {mascota, propietario, fecha, hora, sintomas} = cita
    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>sintomas: <span>{sintomas}</span></p>
        </div>
    )
}

export default Cita;