import type { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle className="font-raleway font-bold">
          {menuItem.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-bold font-raleway">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
      <CardContent className="font-raleway">{menuItem.description}</CardContent>
    </Card>
  );
};

export default MenuItem;
