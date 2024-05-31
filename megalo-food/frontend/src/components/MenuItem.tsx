import { MenuItem as MenuItemType } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItemProps {
  menuItem: MenuItemType;
  addToCart: () => void;
  updateCartItemQuantity: (menuItemId: string, quantity: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, addToCart, updateCartItemQuantity }) => {
  // Convertir el precio al formato correcto
  const formattedPrice = (menuItem.price / 100).toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
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
            <button
              onClick={() => updateCartItemQuantity(menuItem._id, -1)}
              className="button-decrease"
            >
              -
            </button>

            <button
              onClick={() => addToCart()}
              className="button-increase"
            >
              +
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;