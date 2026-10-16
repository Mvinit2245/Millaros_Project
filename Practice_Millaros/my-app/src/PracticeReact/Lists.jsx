function Lists() {
  const students = [
    { id: 1, name: "Rahul", course: "React" },
    { id: 2, name: "Priya", course: "JavaScript" },
    { id: 3, name: "Amit", course: "Node.js" },
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>Name: {student.name}</h2>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default Lists;