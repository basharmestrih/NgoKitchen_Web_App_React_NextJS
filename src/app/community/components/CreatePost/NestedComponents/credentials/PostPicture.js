"use client";

import { useRef } from "react";
import { AddPhotoAlternate } from "@mui/icons-material";

export default function PostPicture({ image, onChange }) {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 md:h-[25rem]"
      >
        {image ? (
          <>
            <img
              src={image}
              alt="Selected cover"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black/20 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-800">
                Change Cover Image
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <AddPhotoAlternate className="mb-2 h-10 w-10 text-gray-400" />
            <span className="font-semibold">Add Cover Image</span>
          </div>
        )}
      </button>
    </>
  );
}
