import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2 py-4">
      <div>
        <h2 className="text-2xl font-bold font-raleway">Menú</h2>
        <FormDescription className="font-raleway font-semibold">
          Crea tu menú y asigna a cada artículo un nombre y un precio
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        className="bg-red-500 font-raleway"
        type="button"
        onClick={() => append({ name: "", price: "", description: "" })}
      >
        Añadir plato
      </Button>
    </div>
  );
};

export default MenuSection;
