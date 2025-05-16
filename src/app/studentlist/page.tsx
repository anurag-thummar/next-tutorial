"use client";

import Link from "next/link";
import { useState } from "react";

export default function StudentList() {
  const [students] = useState(["Anil", "Sam", "Peter", "Bruce"]);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Link href={`/studentlist/${student.toLowerCase()}`}>
              {student}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
