// "use client"; // For App Router

// import React, { useState } from "react";

// const ImageUpload = () => {
//   const [fileUrl, setFileUrl] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const fileInput = e.target.elements.file;
//     const formData = new FormData();
//     formData.append("file", fileInput.files[0]);

//     const res = await fetch("http://localhost:3000/api/upload", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     if (data?.fileUrl) {
//       setFileUrl(data.fileUrl);
//     }
//   };

//   return (
//     <main>
//       <h1>Upload Image</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" name="file" accept="image/*" required />
//         <button type="submit">Upload Image</button>
//       </form>

//       {fileUrl && (
//         <div>
//           <h3>Uploaded Image:</h3>
//           <img src={fileUrl} alt="Uploaded" width={200} />
//         </div>
//       )}
//     </main>
//   );
// };

// export default ImageUpload;

"use client";
import { useState } from "react";
export default function Home() {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set("abc", file);
    const result = await fetch("api/upload", {
      method: "POST",
      body:data
    });
    console.log(result)
  };
  return (
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </main>
  );
}
