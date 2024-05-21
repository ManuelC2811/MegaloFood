import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  cellphone: z
    .string()
    .min(1, "Telefono movil is required")
    .regex(/^\+?\d{1,3}\s?\d{1,4}\s?\d{4,}$/, "El formato del número de teléfono no es válido"),
  city: z.string().min(1, "city is required"),
  country: z.string().min(1, "country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  const formatPhoneNumber = (value: string) => {
    return value
      .replace(/[^\d+]/g, '')
      .replace(/(\+\d{1,2})(\d{2,3})(\d{4,})/, (match, p1, p2, p3) => {
        return `${p1} ${p2} ${p3}`;
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold font-raleway">Perfil de usuario</h2>
          <FormDescription className="font-raleway font-semibold">
            Ver y cambiar la información de tu perfil
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-raleway font-bold">
                Correo electrónico
              </FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-raleway font-bold">Nombre</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-raleway font-bold">
                  Dirección
                </FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Controller
            control={form.control}
            name="cellphone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-raleway font-bold">Telefono movil</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white"
                    onChange={(e) => {
                      const formattedValue = formatPhoneNumber(e.target.value);
                      field.onChange(formattedValue);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-raleway font-bold">Ciudad</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-raleway font-bold">País</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-red-500 font-raleway">
            Enviar
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
