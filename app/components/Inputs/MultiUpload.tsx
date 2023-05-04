"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

const uploadPreset = "f5j7zfk0";

interface ImageUploadProps {
  onChange: (value: string) => void;
}

const MultiUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex flex-col items-center justify-center gap-4 p-10 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
          >
            <TbPhotoPlus size={30} />
            <div className="font-semibold text-md">Click to upload</div>
            {/* {value && (
              <div className="absolute inset-0 w-full h-full ">
                <Image
                  fill
                  style={{ objectFit: "fill" }}
                  src={value}
                  alt="House"
                />
              </div>
            )} */}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default MultiUpload;
