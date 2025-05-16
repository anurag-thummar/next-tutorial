export default function Student({ params }: { params: { student: string } }) {
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {params.student}</h3>
    </div>
  );
}

export function generateMetadata({ params }: { params: { student: string } }) {
  return {
    title: "Student Data Page",
  };
}
