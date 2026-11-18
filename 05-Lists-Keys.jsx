function StudentList() {
  const students = [
    { id: 1, name: "Rahul", department: "CSE" },
    { id: 2, name: "Priya", department: "ISE" },
    { id: 3, name: "Arjun", department: "ECE" },
    { id: 4, name: "Sneha", department: "CSE" },
    { id: 5, name: "Shreya", department: "AIML" }
  ];

  return (
    <div>
      <h1>Student Management System</h1>

      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Department: {student.department}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;