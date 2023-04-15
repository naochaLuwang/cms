"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useSession } from "next-auth/react";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useEffect, useState } from "react";
import FormContainer from "../Form/FormContainer";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

const LoginForm: React.FC = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { data: session, status: sessionStatus } = useSession();

  const user: User = session?.user as User;

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.replace("/dashboard");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <FormContainer
      disabled={isLoading}
      title="Pratiksha Edu CMS"
      actionLabel="Login"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default LoginForm;
