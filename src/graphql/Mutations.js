import { gql } from '@apollo/client';

export const MUTATION_STUDENT_RAGISTRATION = gql`
mutation CreateStudent($studentInput: studentInput) {
  createStudent(StudentInput: $studentInput) {
    id
    fName
    lName
    contact
    email
    role
    username
    password
    createDateTime
    status
  }
}
`;

export const MUTATION_STUDENT_LOGIN = gql`
mutation StudentLogin($username: String!, $password: String!) {
  studentLogin(username: $username, password: $password) {
    token
    isFormFilled
  }
}
`;

export const MUTATION_TEACHER_RAGISTRATION = gql`
  mutation CreateTeacher($teacherInput: teacherInput) {
  createTeacher(TeacherInput: $teacherInput) {
    id
    fName
    lName
    contact
    email
    role
    isVerified
    username
    password
    createDateTime
    status
  }
}
`;

export const MUTATION_TEACHER_LOGIN = gql`
mutation TeacherLogin($username: String!, $password: String!) {
  teacherLogin(username: $username, password: $password) {
    token
    isFormFilled
  }
}
`;
export const MUTATION_GET_CHATBOT = gql`
mutation ChatBot($question: String!) {
  chatBot(question: $question) {
    status
    answer
  }
}
`;
export const MUTATION_USER_LEVEL_FORM = gql`
mutation Mutation($userLevelFormInput: userLevelFormInput) {
  createUserLevelForm(UserLevelFormInput: $userLevelFormInput) {
    id
    type
    level
    language
    course
    location
    userId
    createdDateTime
  }
}
`;
