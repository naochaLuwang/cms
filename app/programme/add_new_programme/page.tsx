"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";
import Heading from "../../components/Heading";
import SmallInput from "../../components/Inputs/SmallInput";
import toast, { Toaster } from "react-hot-toast";
import Wrapper from "@/app/components/Wrapper";

import { useRouter } from "next/navigation";
import Select from "@/app/components/Select";

import ImageUpload from "@/app/components/Inputs/ImageUpload";

const NewProgramme = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      programmeName: "",
      programmeCode: "",
      programmeType: "BACHELOR",
      image: "",
      order: 0,
      status: "ACTIVE",
    },
  });

  //   const handleEditorChange = (value: string) => {
  //     setValue("content", value as string);
  //   };

  //   const editorContent = watch("content");

  const programmeName = watch("programmeName");
  const image = watch("image");
  //   const pageType = watch("pageType");

  const generateSlug = () => {
    const slug = programmeName.toLowerCase().replace(/\s+/g, "_");

    setValue("slug", slug as string);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/programme", data)
      .then(() => {
        toast.success("Programme created successfully");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        router.push("/programme");
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Programme" subtitle="Add a new Programme" />
      <SmallInput
        id="programmeName"
        label="Programme Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <SmallInput
        id="programmeCode"
        label="Programme Code"
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
          className="w-48 h-10 py-2 text-white duration-200 ease-in-out transform bg-blue-500 border rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline active:bg-blue-800 translate-all"
          onClick={generateSlug}
        >
          Generate slug
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="mb-2 text-neutral-600">
          Programme Type <span className="text-rose-500">*</span>
        </h1>
        <Select
          id="programmeType"
          register={register}
          errors={errors}
          label="status"
          menus={[
            { id: "BACHELOR", title: "BACHELOR" },
            { id: "DIPLOMA", title: "DIPLOMA" },
          ]}
        />
      </div>
      <SmallInput
        id="order"
        label="Display Order"
        disabled={isLoading}
        register={register}
        errors={errors}
        isNumber={true}
      />
      <div className="flex flex-col">
        <h1 className="mb-2 text-neutral-600">
          Status <span className="text-rose-500">*</span>
        </h1>
        <Select
          id="status"
          register={register}
          errors={errors}
          label="status"
          menus={[
            { id: "ACTIVE", title: "ACTIVE" },
            { id: "INACTIVE", title: "INACTIVE" },
          ]}
        />
      </div>
      <div className="flex flex-col w-56 h-auto gap-2">
        <h1 className="text-neutral-500">Thumbnail Image</h1>
        <ImageUpload
          onChange={(value) => setValue("image", value)}
          value={image}
        />
      </div>
      {/* <div className="flex items-center w-full h-auto space-x-3 ">
        <h1 className="text-neutral-500">Page Type</h1>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            value="dynamic"
            id="dynamic"
            {...register("pageType")}
            defaultChecked
          />
          <label htmlFor="dynamic">Dynamic</label>

          <input
            type="radio"
            value="static"
            {...register("pageType")}
            id="static"
          />
          <label htmlFor="static">Static</label>
        </div>
      </div> */}

      {/* {pageType === "dynamic" && (
        <div className="flex flex-col w-full h-96">
          <h1 className="mb-5 text-neutral-500">Page Content</h1>
          <MyEditor
            onChange={handleEditorChange}
            content={editorContent}
            className="h-96"
          />
        </div>
      )} */}
    </div>
  );

  return (
    <>
      <Wrapper
        disabled={isLoading}
        title=""
        actionLabel="Submit"
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default NewProgramme;
