import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Realizado", value: "placed", progressValue: 0 },
  {
    label: "En espera de confirmación del restaurante",
    value: "paid",
    progressValue: 25,
  },
  { label: "En proceso", value: "inProgress", progressValue: 50 },
  { label: "En camino", value: "outForDelivery", progressValue: 75 },
  { label: "Entregado", value: "delivered", progressValue: 100 },
  { label: "Cancelado", value: "cancelled", progressValue: 0 },
];
