"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";

import Heading from "../../components/Heading";

import SmallInput from "../../components/Inputs/SmallInput";
import { toast } from "react-hot-toast";
import Wrapper from "@/app/components/Wrapper";
import Select from "@/app/components/Select";

const NewSubMenu = ({ menus }: any) => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      slug: "",
      order: 0,
      menuId: "",
      status: true,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);

    axios
      .post("/api/submenu", data)
      .then(() => {
        console.log("Sucessfully registered");
      })
      .catch((error) => {
        toast.error("Error ");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Heading title="Sub Menu" subtitle="Add a new sub menu" />
        <SmallInput
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <SmallInput
          id="slug"
          label="Slug"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Select id="menuId" register={register} errors={errors} menus={menus} />
        {/* <Select
          id="status"
          register={register}
          errors={errors}
          menus={[
            { id: true, title: "ACTIVE" },
            { id: false, title: "INACTIVE" },
          ]}
        /> */}

        <SmallInput
          id="order"
          label="Order"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    </>
  );

  return (
    <Wrapper
      disabled={isLoading}
      title=""
      actionLabel="Submit"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default NewSubMenu;
