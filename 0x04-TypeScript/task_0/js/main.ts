interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'widdly',
    lastName: 'widdly',
    age: 69,
    location: 'asdf'
}

const student2: Student = {
  firstName: 'qwerty',
  lastName: 'qwerty',
  age: 69,
  location: 'whatever'
}

const studentList: Array<Student> = [student1, student2];

const table = document.createElement('table');

for (const student of studentList) {
  const row = table.insertRow();
  row.insertCell().innerHTML = student.firstName;
  row.insertCell().innerHTML = student.lastName;
}

document.body.appendChild(table);