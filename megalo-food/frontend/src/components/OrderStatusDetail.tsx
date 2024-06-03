import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  // Formatear la fecha de creación del pedido
  const formattedDate = new Date(order.createdAt).toLocaleDateString();
  return (
    <div className="space-y-5 font-raleway">
      <div className="flex flex-col">
        <span className="font-bold">Fecha de creación:</span>
        <span>{formattedDate}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Entregar a:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold font-raleway">Tu pedido</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold font-raleway">Total</span>
        <span>${(order.totalAmount)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
