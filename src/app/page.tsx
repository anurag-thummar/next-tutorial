// "use client"
// import Link from 'next/link'
// import styles from './page.module.css'
// import {useRouter} from 'next/navigation'

// export default function Home() {
//   const router = useRouter();
//   const navigate=(name)=>{
//     router.push(name)
//   }
//   return (
//     <main>
//      <h1>Dynamic Routing</h1>
//      <Link href="/login" >Go to Login Page</Link>
//      <br />
//      <br />
//      <Link href="/about" >Go to About Page</Link>
//      <br />
//      <br />
//      <button onClick={()=>navigate("/login")} >Go to Login Page</button>
//      <button onClick={()=>navigate("/about")} >Go to About Page</button>

//     </main>
//   )
// }

// // Condtional styling
// "use client";
// import { useState } from 'react';
// import style from './styles/style.module.css';

// export default function Home() {
//   const [color, setColor] = useState("red");
//   const { red, green, orange } = style;

//   return (
//     <main>
//       <h1 className={color === 'red' ? red : green}>Condition with Style</h1>
//       <h2 style={{ backgroundColor: color === 'red' ? 'red' : 'green' }}>Heading 2</h2>
//       <h3 className={orange}>Heading 3</h3>
//       <h4 className={red}>Dummy text</h4>
//       <h4 className={red}>Dummy text</h4>
//       <h4 className={red}>Dummy text</h4>
//       <h4 id={style.orange}>Dummy text</h4>
//       <button onClick={() => setColor("green")}>Update Color</button>
//     </main>
//   );
// }

// import Image from 'next/image'
// import React from 'react'
// import Profile from "../../public/vercel.svg"
// console.log("Profile")

// const page = () => {
//   return (
//     <div>
//       <Image src={Profile}
//       width={400}
//       height={100} alt='...'/>
//       <img src={Profile.src} alt="" />
//     </div>
//   )
// }

// export default page

import Image from "next/image";
import React from "react";
import Profile from "../../public/vercel.svg";
import { API_BASE_URL } from "./config/constants";
console.log("Profile");

const page = () => {
  // console.log(process.env.SERVER_PASSWORD)
  // console.log(process.env.DB_PASSWORD)
  return (
    <div>
      {/* {
        process.env.NODE_ENV == "development" ? <h1>You are in development mode</h1> : <h1>You are on Production mode</h1>
      } */}
      <h1>Hello World..!</h1>
      <h1 style={{ fontFamily: "Robot" }}>Hello World..!</h1>
      {API_BASE_URL}
    </div>
  );
};

export default page;
