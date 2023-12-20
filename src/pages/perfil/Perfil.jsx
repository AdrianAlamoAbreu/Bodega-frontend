import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { getOwnProfile } from '../../services/getService'

 const Profile = () => {
  const [user, setUser] = useState({})

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOwnProfile();
        setUser(result);
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
              <p>
                <strong>Teléfono:</strong> {user.number_phone}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}

          {Object.keys(user).length !== 0 ? (
            <>
              <h3>
                <strong>Fecha:</strong> {user.fecha}
              </h3>
              <p>
                <strong>Franja horaria:</strong> {user.franja_horaria}
              </p>
              <p>
                <strong>Nº de asistentes:</strong> {user.reservado_personas}
              </p>
              <p>
                <strong>Bodega:</strong> {user.id_bodega}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}

          {Object.keys(user).length !== 0 ? (
            <>
              <h3>
                <strong>Fecha de pedido:</strong> {user.fecha}
              </h3>
              <p>
                <strong>Total:</strong> {user.total}
              </p>
              <p>
                <strong>Dirección de envío:</strong> {user.direccion_envio}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}
        </div>
      );
    };
export default Profile
