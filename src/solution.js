/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  const studentKeys = students.map(student=>student.name)
  if(studentKeys.indexOf(name) < 0){
    return null
  }
  let foundStudentScore
  students.filter((student)=> {student.name !== name ? false:
    foundStudent = student.score
  })
  console.log(foundStudent)
  return foundStudent
}

module.exports = findStudentScoreByName;
