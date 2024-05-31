import { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  menuItem: MenuItemType;
  addToCart: () => void;
  updateCartItemQuantity: (menuItemId: string, quantity: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  menuItem,
  addToCart,
  updateCartItemQuantity,
}) => {
  // Convertir el precio al formato correcto
  const formattedPrice = (menuItem.price / 100).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });

  return (
    <Card className="menu-item">
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <p>{formattedPrice}</p>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => updateCartItemQuantity(menuItem._id, -1)}
              className="button-decrease bg-red-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full"
            >
              -
            </Button>
            <Button
              onClick={() => addToCart()}
              className="button-increase bg-green-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full"
            >
              +
            </Button>
          </div>
        </div>
      </CardContent>
      <CardContent className="font-raleway">{menuItem.description}</CardContent>
    </Card>
  );
};

export default MenuItem;
