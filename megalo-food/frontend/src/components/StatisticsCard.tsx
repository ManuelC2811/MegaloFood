import { useGetMyOrders } from "@/api/OrderApi";

const StatisticsCard = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const totalOrders = orders ? orders.length : 0;

  return (
    <div>
      <h1>Estadísticas del Restaurante</h1>
      <p>Total de órdenes: {totalOrders}</p>
    </div>
  );
};

export default StatisticsCard;
