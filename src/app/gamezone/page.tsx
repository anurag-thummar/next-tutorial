// page redirection
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Gamezone() {
  const router = useRouter();

  useEffect(() => {
    alert(`You are being redirected from "/gamezone" to Homepage`);
    router.push("/");
  }, [router]);

  return <div>Redirecting...</div>;
}




// Add this in next.config.js file //

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: 'export'
//     redirects:async()=>{
//         return[
//             {
//                 source: '/gamezone',
//                 destination: '/',
//                 permanent: true 
//             }
//         ]
//     }
// }

// module.exports = nextConfig
