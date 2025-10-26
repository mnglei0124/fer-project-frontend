import React, { useState } from "react";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Upload Image
      </label>
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="max-w-xs h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
