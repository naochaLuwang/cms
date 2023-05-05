"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";

import Heading from "../components/Heading";

import SmallInput from "../components/Inputs/SmallInput";
import toast, { Toaster } from "react-hot-toast";
import Wrapper from "@/app/components/Wrapper";
import DepartmentSelect from "@/app/components/Select/DepartmentSelect";
import Select from "@/app/components/Select";
import MyEditor from "@/app/components/Editor";
import { useRouter } from "next/navigation";
import ImageUpload from "./Inputs/ImageUpload";
import DesignationSelect from "./Select/DesignationSelect";

interface NewPeopleProps {
  department: DepartmentProps[];
  designations: DesignationProps[];
}

const NewPeople: React.FC<NewPeopleProps> = ({ department, designations }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      slug: "",
      email: "",
      phone: "",
      showEmail: "YES",
      showPhone: "YES",
      departmentId: "",
      designationId: "",
      bio: "",
      order: 0,
      profileUrl: "",

      status: "ACTIVE",
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const profileUrl = watch("profileUrl");

  const generateSlug = () => {
    // Generate slug from username
    const slug = (
      firstName.toLowerCase() +
      "_" +
      lastName.toLowerCase()
    ).replace(/\s+/g, "_");
    // Set the generated slug to the slug field in the form
    setValue("slug", slug as string);
  };

  const handleEditorChange = (value: string) => {
    setValue("bio", value);
    console.log(value);
  };

  const editorContent = watch("bio");

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/people", data)
      .then(() => {
        toast.success("People created successfully");
        router.push("/people");
      })
      .catch((error) => {
        toast.error("Error creating People");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Heading title="People" subtitle="Add a new person" />
        <SmallInput
          id="firstName"
          label="First Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          isNumber={false}
        />
        <SmallInput
          id="lastName"
          label="Last Name"
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
        <div className="flex items-center justify-center space-x-3">
          <SmallInput
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            isNumber={false}
          />

          <div className="flex items-center w-full h-auto mt-6 space-x-3 ">
            <h1 className="text-neutral-500">Show Email</h1>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="YES"
                id="yes"
                {...register("showEmail")}
                defaultChecked
              />
              <label htmlFor="yes">Yes</label>

              <input
                type="radio"
                value="NO"
                {...register("showEmail")}
                id="no"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <SmallInput
            id="phone"
            label="Phone"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            isNumber={false}
          />

          <div className="flex items-center w-full h-auto mt-6 space-x-3 ">
            <h1 className="text-neutral-500">Show Phone</h1>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="YES"
                id="yesp"
                {...register("showPhone")}
                defaultChecked
              />
              <label htmlFor="yesp">Yes</label>

              <input
                type="radio"
                value="NO"
                {...register("showPhone")}
                id="nop"
              />
              <label htmlFor="nop">No</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-2 text-neutral-600">
            Department <span className="text-rose-500">*</span>
          </h1>
          <DepartmentSelect
            id="departmentId"
            register={register}
            errors={errors}
            departments={department}
            label="Department"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="mb-2 text-neutral-600">
            Designation <span className="text-rose-500">*</span>
          </h1>
          <DesignationSelect
            id="designationId"
            register={register}
            errors={errors}
            designations={designations}
            label="Designation"
          />
        </div>

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

        <SmallInput
          id="order"
          label="Order"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          isNumber
        />

        <div className="flex flex-col w-56 h-auto gap-2">
          <h1 className="text-neutral-500">Profile Image</h1>
          <ImageUpload
            onChange={(value) => setValue("profileUrl", value)}
            value={profileUrl}
          />
        </div>

        <div className="flex flex-col w-full h-96">
          <h1 className="mb-2 text-neutral-500">Bio</h1>
          <MyEditor
            onChange={handleEditorChange}
            content={editorContent}
            className="h-96"
          />
        </div>
      </div>
    </>
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

export default NewPeople;
