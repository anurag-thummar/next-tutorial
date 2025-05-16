"use client";

export default function Lecture({ params }: { params: { lecture: string[] } }) {
  console.log(params);
  return (
    <div>
      <h1>Day of college: {params.lecture[0]}</h1>
      <h1>Lecture: {params.lecture[1]}</h1>
    </div>
  );
}
