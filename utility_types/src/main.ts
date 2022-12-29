// Partial

interface Assignment {
  stdId: string
  title: string
  grade: number
  verified?: boolean
}

const assignment1: Assignment = {
  stdId: 'std1',
  title: 'Math',
  grade: 90
}

let updatedAssignment: Assignment

// making all the fields optional by using Partial keyword, only required field is stdId
// and its specified with Pick keyword
const updateAssignment = (
  assignmentToUpdate: Assignment,
  propsToUpdate: Partial<Assignment> & Pick<Assignment, 'stdId'>
): Assignment => {
  const { stdId } = propsToUpdate
  console.log('Id : ', stdId)
  return { ...assignmentToUpdate, ...propsToUpdate }
}

updatedAssignment = updateAssignment(assignment1, { stdId: 'std1', grade: 95 })
console.log(updatedAssignment)

// Required and Readonly
// making all the fields required by Required keyword

const saveAssignmentToDB = (assignment: Required<Assignment>): void => {
  console.log(assignment)
  // send it to DB logic
  return
}
// saveAssignmentToDB(updatedAssignment); gives an error because verified field is needed
// eventhough verified property was optional

saveAssignmentToDB({ ...updatedAssignment, verified: false })

const verifyAssignment = (assignment: Assignment): Readonly<Assignment> => {
  return { ...assignment, verified: true }
}

const verifiedAssignment = verifyAssignment(updatedAssignment)
console.log(verifiedAssignment)

// verifiedAssignment.grade = 12; because the function returns a readonly Assignment
// this code will give an error.

// Record Type

const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  blue: '0000FF',
  12: 'blue',
  true: 'false',
  null: 'undefined',
  undefined: 'yellow'
}

type Students = 'Kelly' | 'Marry'
type Grades = 'A' | 'B' | 'C' | 'D' | 'U'

type GradualPaper = Record<Students, Grades>

const Paper: GradualPaper = {
  Kelly: 'A',
  Marry: 'D'
}

interface Grades2 {
  assignment1: number
  assignment2: number
}

const gradeData: Record<Students, Grades2> = {
  Kelly: {
    assignment1: 90,
    assignment2: 77
  },
  Marry: {
    assignment1: 88,
    assignment2: 91
  }
}

// Pick and Omit

// picks both fields
type AssignResult = Pick<Assignment, 'stdId' | 'grade'>

const score: AssignResult = {
  stdId: 'std2',
  grade: 84
}

//omits the given fields
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
  stdId: 'std3',
  title: 'CNG'
}

// Exclude and Extract
// they work with string literal union types not with interfaces
type passingGrades = Exclude<Grades, 'U' | 'D'>
type goodGrades = Extract<Grades, 'A' | 'B'>

// Nonnullable

type AllPossibleFailingStudents = 'Dave' | 'Marry' | null | undefined

// excludes null and undefined fields
type FailingStudents = NonNullable<AllPossibleFailingStudents>

// Return Type

type Post = { title: string; likes: number }

const createNewPost = (post: Post): Post => {
  //do smt with the data;
  return { ...post }
}

// instead of creating type ahead of time we can use
// returntype and find out the type that is returned from the function

const createNewPost2 = (title: string, likes: number) => {
  return { title, likes }
}

type ReturnedTypeOfTheFnc = ReturnType<typeof createNewPost2>

const tsPost: ReturnedTypeOfTheFnc = createNewPost2('Dancing Elephant', 100)
console.log(tsPost)

// Parameters
// deriving types from parameters passed

type AssignParams = Parameters<typeof createNewPost2>
// parameters returns a tuple type

const assignArgs: AssignParams = ['Utility Types', 99]

const tsAssign: Post = createNewPost2(...assignArgs)
console.log(tsAssign)

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number
  name: string
  username: string
  email: string
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  const data = await response.json()
  return data
}

type FetchUsersReturnType = ReturnType<typeof fetchUsers>

type AwaitedReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
