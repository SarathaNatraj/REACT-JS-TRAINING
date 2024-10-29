interface Student {
    student_id: number;
    name: string;
  }
    
  interface Teacher {
    Teacher_Id: number;
    teacher_name: string;
  }
    
  //defining intersection types
  type teacher_student_type = Student & Teacher;
    
  //initialising the values
  let obj11: teacher_student_type = {
    student_id: 3232,
    name: "rita",
    Teacher_Id: 7873,
    teacher_name: "seema",
  };
    
  console.log(obj11.Teacher_Id);
  console.log(obj11.name);