
useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOneUser(id);
        setUser(result);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };
    fetchData();
  }, [id]);

  const UserTourDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
      const fetchTourData = async () => {
        try {
          const result = await getOwnTour(id);
          setTour(result);
        } catch (error) {
          console.error('Error al obtener detalles del tour:', error);
        }
      };
      fetchTourData();
    }, [id]);

    const UserOrderDetails = () => {
      const { id } = useParams();
      const [order, setOrder] = useState({});

      useEffect(() => {
        const fetchOrderData = async () => {
          try {
            const result = await getOwnOrder(id);
            setOrder(result);
          } catch (error) {
            console.error('Error al obtener detalles del pedido:', error);
          }
        };
        fetchOrderData();
      }, [id]);

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

          {Object.keys(tour).length !== 0 ? (
            <>
              <h3>
                <strong>Fecha:</strong> {tour.fecha}
              </h3>
              <p>
                <strong>Franja horaria:</strong> {tour.franja_horaria}
              </p>
              <p>
                <strong>Nº de asistentes:</strong> {tour.reservado_personas}
              </p>
              <p>
                <strong>Bodega:</strong> {tour.id_bodega}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}

          {Object.keys(order).length !== 0 ? (
            <>
              <h3>
                <strong>Fecha de pedido:</strong> {order.fecha}
              </h3>
              <p>
                <strong>Total:</strong> {order.total}
              </p>
              <p>
                <strong>Dirección de envío:</strong> {order.direccion_envio}
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}
        </div>
      );
    };
  }
    return <UserOrderDetails />;

export default UserDetails;