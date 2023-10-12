import { gql } from '@apollo/client'

export const MUTATION_STUDENT_RAGISTRATION = gql`
 mutation Mutation($studentInput: studentInput) {
  createStudent(StudentInput: $studentInput) {
    id
    fName
    lName
    contact
    email
    username
    password
    createDateTime
    status
  }
}
`
export const MUTATION_TEACHER_RAGISTRATION = gql`
 mutation CreateTeacher($teacherInput: teacherInput) {
  createTeacher(TeacherInput: $teacherInput) {
    id
    fName
    lName
    contact
    email
    isVerified
    username
    password
    createDateTime
    status
  }
}
`
