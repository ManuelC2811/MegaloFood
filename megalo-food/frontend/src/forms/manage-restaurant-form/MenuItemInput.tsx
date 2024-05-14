import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-3">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="flex items-center gap-1 font-raleway font-bold">
              Nombre <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Cheese Pizza"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* <FormField
        control={control}
        name="imageItemFile"
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="flex items-center gap-1 font-raleway font-bold">
              Imagen <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                className="bg-white"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(event) =>
                  field.onChange(
                    event.target.files ? event.target.files[0] : null
                  )
                }
              />
            </FormControl>
          </FormItem>
        )}
      /> */}

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem className="mb-2">
            <FormLabel className="flex items-center gap-1 font-raleway font-bold">
              Precio $ <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="8.00" className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`menuItems.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1 font-raleway font-bold">
              Descripción <FormMessage />
            </FormLabel>
            <FormControl>
              <textarea
                {...field}
                placeholder="Delicious pizza with mozzarella cheese"
                className="bg-white w-80 h-20 border rounded-md text-sm"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 max-h-fit font-raleway"
      >
        Quitar
      </Button>
    </div>
  );
};

export default MenuItemInput;
