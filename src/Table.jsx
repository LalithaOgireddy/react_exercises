import React from 'react';

const studentData = [    
    { id: 1, name: 'Alice', subject: 'Math', grade: 'A' },    
    { id: 2, name: 'Bob', subject: 'Science', grade: 'B' },    
    { id: 3, name: 'Charlie', subject: 'History', grade: 'A-' },    
    { id: 4, name: 'Diana', subject: 'English', grade: 'B+' },    
    { id: 5, name: 'Edward', subject: 'Math', grade: 'C' },    
  ];    

  const styling = (grade) => {
        let st = "";
        if(grade == "A" || grade =="A-") return "bg-success text-white";
        else if (grade == "B" || grade =="B+") return "bg-info text-white";
        else return "bg-warning text-dark";
  }
  
const Table = () => {
    return (
        <div>
            <h3>Student Grades</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student) => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.subject}</td>
                            <td className={styling(student.grade)}>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
};

export default Table;