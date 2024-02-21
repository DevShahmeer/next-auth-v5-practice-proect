import { CardWrapper } from "@/components/auth/card-wrapper";

import { zodResolver } from "@hookform/resolvers/zod"; }
import {useForm} from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

export const LoginForm = () => {

  const form = useForm
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};
