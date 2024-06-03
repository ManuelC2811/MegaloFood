import { useGetMyRestaurantOrders } from "@/api/MyRestaurantApi";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const StatisticsCard = () => {
  const { orders } = useGetMyRestaurantOrders();

  //Total de ingresos
  const calculateTotalIncome = () => {
    let totalIncome = 0;
    orders?.forEach((order) => {
      totalIncome += order.totalAmount;
    });
    return totalIncome;
  };

  //Valor promedio por pedido
  const calculateAverageOrderValue = () => {
    const totalOrders = orders?.length || 0;
    if (totalOrders === 0) {
      return 0;
    }
    const totalIncome = calculateTotalIncome();
    return totalIncome / totalOrders;
  };

  //Platillos mas populares
  const getPopularDishes = () => {
    const dishCounts: { [key: string]: number } = {};
    orders?.forEach((order) => {
      order.cartItems.forEach((item) => {
        const quantity = parseInt(item.quantity);
        if (!isNaN(quantity)) {
          if (dishCounts[item.name]) {
            dishCounts[item.name] += quantity;
          } else {
            dishCounts[item.name] = quantity;
          }
        } else {
          console.error(`Error: '${item.quantity}' no es un número válido.`);
        }
      });
    });
    const popularDishes = Object.keys(dishCounts).sort(
      (a, b) => dishCounts[b] - dishCounts[a]
    );
    return popularDishes.slice(0, 3).map((dish) => ({
      name: dish,
      count: dishCounts[dish],
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-3 text-2xl font-bold font-raleway mt-4">
          Estadísticas del Restaurante
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 font-raleway">
          <Statistic label="Total de órdenes" value={orders?.length || 0} />
          <Statistic
            label="Total de ingresos"
            value={`$${calculateTotalIncome().toFixed(2)}`}
          />
          <Statistic
            label="Valor promedio por pedido"
            value={`$${calculateAverageOrderValue().toFixed(2)}`}
          />
          <h3 className="text-lg font-bold mt-5">Platillos más populares</h3>
          {getPopularDishes().map((dish, index) => (
            <Statistic
              key={index}
              label={`${dish.name}`}
              value={`${dish.count} unidades`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

type StatisticProps = {
  label: string;
  value: string | number;
};

const Statistic = ({ label, value }: StatisticProps) => {
  return (
    <div className="flex justify-between">
      <span className="font-raleway font-semibold">{label}:</span>
      <span>{value}</span>
    </div>
  );
};

export default StatisticsCard;
