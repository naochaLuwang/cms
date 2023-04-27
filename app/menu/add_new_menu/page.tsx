"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import Heading from "../../../components/Heading";
import SmallInput from "../../../components/Inputs/SmallInput";
import { toast } from "react-hot-toast";
import Wrapper from "@/app/components/Wrapper";
import MyEditor from "@/app/components/Editor";

const NewMenu = () => {
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
      status: "ACTIVE",
      content: "",
    },
  });

  const handleEditorChange = (value: any) => {
    setValue("content", value);
    console.log(value);
  };

  const editorContent = watch("content");

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

    // axios
    //   .post("/api/menu", data)
    //   .then(() => {
    //     console.log("Sucessfully registered");
    //   })
    //   .catch((error) => {
    //     toast.error("Error ");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Menu" />
      <SmallInput
        id="title"
        label="Menu Title"
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
      <SmallInput
        id="order"
        label="Display Order"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={true}
      />
      <div className="flex flex-col w-full h-96">
        <h1>Page Content</h1>
        <MyEditor
          onChange={handleEditorChange}
          content={editorContent}
          className="h-96"
        />
      </div>
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
