import {
  useGetMyRestaurantOrders,
} from "@/api/MyRestaurantApi";

const StatisticsCard = () => {

  const { orders } = useGetMyRestaurantOrders();



  return (
    <div>
      <h1>Estadísticas del Restaurante</h1>
      <p>Total de órdenes: {orders?.length}</p>
    </div>
  );
};

export default StatisticsCard;