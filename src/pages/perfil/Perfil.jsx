import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { getOwnProfile } from '../../services/getService'

 const Profile = () => {
  const [user, setUser] = useState({})

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOwnProfile();
        setUser(result.user);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };
    fetchData();
  }, []);

      return (
        <div>
          {Object.keys(user).length !== 0 ? (
            <>
               <h3>
                <strong>Nombre:</strong> {user.user_name}
              </h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}

          {Object.keys(user.pedidos).length !== 0 ? (
            <>
              <h3>
                <strong>Fecha:</strong> {user.pedidos.fecha}
              </h3>
              <p>
                <strong>Franja horaria:</strong> {user.pedidos.franja_horaria}
              </p>
              <p>
                <strong>Nº de asistentes:</strong> {user.pedidos.reservado_personas}
              </p>
              <p>
                <strong>Bodega:</strong> {user.pedidos.id_bodega}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}

          {/* {Object.keys(user.reserva).length !== 0 ? (
            <>
              <h3>
                <strong>Fecha de pedido:</strong> {user.reserva.fecha}
              </h3>
              <p>
                <strong>Total:</strong> {user.reserva.total}
              </p>
              <p>
                <strong>Dirección de envío:</strong> {user.reserva.direccion_envio}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )} */}
        </div>
      );
    };
export default Profile
