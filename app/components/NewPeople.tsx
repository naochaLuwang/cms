"use client";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useState, ChangeEvent } from "react";

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
import Image from "next/image";

interface NewPeopleProps {
  department: DepartmentProps[];
  designations: DesignationProps[];
}

const NewPeople: React.FC<NewPeopleProps> = ({ department, designations }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState("");
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
      qualification: "",
      research: "",
      publications: "",
      experience: "",
      achievements: "",
      order: 0,
      profileUrl: "",

      status: "ACTIVE",
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const profileUrl = watch("profileUrl");

  const onImageFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      console.warn("files list is empty");
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/doctorimage", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.error("something went wrong, check your console.");
        return;
      }

      const data: { fileUrl: string } = await res.json();

      setImageUrl(data.fileUrl);
      setValue("profileUrl", data.fileUrl);
    } catch (error) {
      console.error("something went wrong, check your console.");
    }

    /** Reset file input */
    e.target.type = "text";
    e.target.type = "file";
  };

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

  const handleQualificationChange = (value: string) => {
    setValue("qualification", value);
  };
  const handleResearchChange = (value: string) => {
    setValue("research", value);
  };
  const handleExperienceChange = (value: string) => {
    setValue("experience", value);
  };

  const handlePublicationsChange = (value: string) => {
    setValue("publications", value);
  };

  const handleAchievementsChange = (value: string) => {
    setValue("achievements", value);
  };

  const qualificationContent = watch("qualification");
  const reasearchContent = watch("research");
  const experienceContent = watch("experience");
  const publicationsContent = watch("publications");
  const achievementsContent = watch("achievements");

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    console.log(data);

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
            isNumber={false}
          />

          <div className="flex items-center w-full h-auto mt-6 space-x-3 ">
            <h1 className="text-neutral-500">Show Phone</h1>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="YES"
                id="yes"
                {...register("showPhone")}
                defaultChecked
              />
              <label htmlFor="yes">Yes</label>

              <input
                type="radio"
                value="NO"
                {...register("showPhone")}
                id="no"
              />
              <label htmlFor="no">No</label>
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

        {/* <div className="flex flex-col w-56 h-auto gap-2">
          <h1 className="text-neutral-500">Profile Image</h1>
          <ImageUpload
            onChange={(value) => setValue("profileUrl", value)}
            value={profileUrl}
          />
        </div> */}

        <div className="w-full h-auto">
          <h1>Profile Image</h1>
          {imageUrl ? (
            <div className="relative w-48 h-48">
              <Image
                src={imageUrl}
                alt="uploaded image"
                fill
                style={{ objectFit: "fill" }}
                className="rounded-md"
                priority={true}
              />
            </div>
          ) : (
            <div className="w-48 h-48">
              <label
                htmlFor="imgUrl"
                className="inset-0 flex items-center justify-center w-full h-full transition duration-300 bg-gray-300 bg-opacity-25 rounded-md cursor-pointer hover:bg-opacity-50 focus-within:bg-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2C5.03 2 1 6.03 1 10c0 3.97 3.03 8 9 8 3.97 0 8-3.03 8-8 0-4.97-4.03-8-8-8zM5 11h4v4h2v-4h4V9h-4V5H9v4H5v2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-gray-600">Upload Image</span>
              </label>
              <input
                id="imgUrl"
                className="absolute w-0 h-0 opacity-0"
                type="file"
                onChange={onImageFileChange}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col w-full h-96">
          <h1 className="mb-2 text-neutral-500">Qualification</h1>
          <MyEditor
            onChange={handleQualificationChange}
            content={qualificationContent}
            className="h-96"
          />
        </div>
        <div className="flex flex-col w-full mt-10 h-96">
          <h1 className="mb-2 text-neutral-500">Research Interest</h1>
          <MyEditor
            onChange={handleResearchChange}
            content={reasearchContent}
            className="h-96"
          />
        </div>
        <div className="flex flex-col w-full mt-10 h-96">
          <h1 className="mb-2 text-neutral-500">Working Experience</h1>
          <MyEditor
            onChange={handleExperienceChange}
            content={experienceContent}
            className="h-96"
          />
        </div>
        <div className="flex flex-col w-full mt-10 h-96">
          <h1 className="mb-2 text-neutral-500">Research & Publications</h1>
          <MyEditor
            onChange={handlePublicationsChange}
            content={publicationsContent}
            className="h-96"
          />
        </div>
        <div className="flex flex-col w-full mt-10 h-96">
          <h1 className="mb-2 text-neutral-500">Other Achievementss</h1>
          <MyEditor
            onChange={handleAchievementsChange}
            content={achievementsContent}
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
