import { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://127.0.0.1:8000/students");
      console.log(response)
      setStudents(response.data.students);
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <p className="underline text-red">Test</p>
      {students?.map((student) => (
        <p key={student.id}>
          {student.nim} <span>{student.name}</span>
        </p>
      ))}
    </div>
    
  );
};

export default Students;
