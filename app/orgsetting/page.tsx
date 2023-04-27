"use client";
import useSWR from "swr";
import axios from "axios";
import Wrapper from "@/app/components/Wrapper";
import Heading from "@/app/components/Heading";
import { useState } from "react";
import SmallInput from "@/app/components/Inputs/SmallInput";
import Textbox from "@/app/components/Textbox";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig.ts";
import ClientOnly from "../components/ClientOnly";
import ImageUpload from "../components/Inputs/ImageUpload";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const OrganizationSettingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);

  const { data, error } = useSWR("/api/orgsetting", fetcher);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      add1: "",
      add2: "",
      mtitle: "",
      description: "",
      facebook: "",
      linkedin: "",
      instagram: "",
    },
  });

  if (data) {
    setValue("name", data[0].name);
    setValue("phone", data[0].phone);
    setValue("email", data[0].email);
    setValue("add1", data[0].add1);
    setValue("add2", data[0].name);
    setValue("mtitle", data[0].mtitle);
    setValue("description", data[0].description);
    setValue("facebook", data[0].facebook);
    setValue("linkedin", data[0].linkedin);
    setValue("instagram", data[0].instagram);
  }

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);

      console.log(files[0]);
    } else {
      message.error("File size to large");
    }
  };

  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          message.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url);
          });
        }
      );
    } else {
      message.error("File not found");
    }
  };

  const handleRemoveFile = () => setImageFile(undefined);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);

    axios
      .post("/api/orgsetting", data)
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
      <Heading title="Organization Setting" />

      <SmallInput
        id="name"
        label="Organization Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <SmallInput
        id="phone"
        label="Organization Phone Number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <SmallInput
        id="email"
        label="Organization Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <SmallInput
        id="add1"
        label="Address Line 1"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <SmallInput
        id="add2"
        label="Address Line 2"
        disabled={isLoading}
        register={register}
        errors={errors}
        isNumber={false}
      />
      <SmallInput
        id="mtitle"
        label="Title (For SEO Meta tag)"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        isNumber={false}
      />
      <Textbox
        id="description"
        label="Description (For SEO)"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="grid grid-cols-3 gap-4">
        <SmallInput
          id="facebook"
          label="Facebook"
          disabled={isLoading}
          register={register}
          errors={errors}
          isNumber={false}
        />

        <SmallInput
          id="linkedin"
          label="LinkedIn"
          disabled={isLoading}
          register={register}
          errors={errors}
          isNumber={false}
        />
        <SmallInput
          id="instagram"
          label="Instagram"
          disabled={isLoading}
          register={register}
          errors={errors}
          isNumber={false}
        />

        <div className="flex flex-col w-full h-auto gap-2">
          <Heading title="Organization logo" />
          <ImageUpload />
        </div>
      </div>
    </div>
  );
  return (
    <Wrapper
      actionLabel="Submit"
      body={bodyContent}
      disabled={isLoading}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default OrganizationSettingPage;
