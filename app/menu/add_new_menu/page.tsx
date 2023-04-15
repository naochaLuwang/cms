"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import FormContainer from "../../components/Form/FormContainer";
import Heading from "../../components/Heading";
import Input from "../../components/Inputs/Input";
import SmallInput from "../../components/Inputs/SmallInput";
import { toast } from "react-hot-toast";
import Wrapper from "@/app/components/Wrapper";
import slugify from "slugify";

const NewMenu = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      slug: "",
      order: 0,
      status: true,
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
    axios
      .post("/api/menu", data)
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
    <div className="flex flex-col gap-4">
      <Heading title="Menu" subtitle="Add a new menu" />
      <SmallInput
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="flex items-end gap-4">
        <SmallInput
          id="slug"
          label="Slug"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <button
          className="w-48 h-10 py-2 text-blue-500 border border-blue-800 rounded-md"
          onClick={generateSlug}
        >
          Generate slug
        </button>
      </div>

      <SmallInput
        id="order"
        label="Order"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
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

export default NewMenu;
