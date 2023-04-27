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
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      slug: "",
      order: 0,
      menuId: "",
      status: "ACTIVE",
    },
  });

  const title = watch("title");
  const generateSlug = () => {
    // Generate slug from username
    const slug = title.toLowerCase().replace(/\s+/g, "_");
    // Set the generated slug to the slug field in the form
    setValue("slug", slug);
  };

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
          isNumber={false}
        />
        <div className="flex items-end gap-4">
          <SmallInput
            id="slug"
            label="Slug"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            isNumber={false}
          />

          <button
            className="w-48 h-10 py-2 text-blue-500 border border-blue-800 rounded-md"
            onClick={generateSlug}
          >
            Generate slug
          </button>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-2 text-neutral-600">Menu</h1>
          <Select
            id="menuId"
            register={register}
            errors={errors}
            menus={menus}
          />
        </div>

        <Select
          id="status"
          register={register}
          errors={errors}
          menus={[
            { id: "ACTIVE", title: "ACTIVE" },
            { id: "INACTIVE", title: "INACTIVE" },
          ]}
        />

        <SmallInput
          id="order"
          label="Order"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          isNumber
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
