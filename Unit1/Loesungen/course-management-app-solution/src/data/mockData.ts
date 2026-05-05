// Typen für die Anwendung
export interface Course {
  id: number
  title: string
  date: string
  status: 'active' | 'inactive'
  description: string
  instructor: string
  capacity: number
}

export interface Participant {
  id: number
  name: string
  email: string
  courseId: number
  status: 'active' | 'inactive' | 'completed'
  enrollmentDate: string
}

// Beispieldaten für Kurse
export const initialCoursesData: Course[] = [
  {
    id: 1,
    title: 'React Grundlagen',
    date: '2024-03-15',
    status: 'active',
    description: 'Einführung in React und funktionale Komponenten',
    instructor: 'Prof. Meyer',
    capacity: 30
  },
  {
    id: 2,
    title: 'JavaScript Fortgeschrittene',
    date: '2024-04-20',
    status: 'active',
    description: 'Asynchrone Programmierung und APIs',
    instructor: 'Prof. Schmidt',
    capacity: 25
  },
  {
    id: 3,
    title: 'CSS und responsive Design',
    date: '2024-02-10',
    status: 'inactive',
    description: 'Modernes CSS mit Flexbox und Grid',
    instructor: 'Prof. Wagner',
    capacity: 35
  },
  {
    id: 4,
    title: 'Web APIs',
    date: '2024-05-05',
    status: 'active',
    description: 'Arbeit mit Fetch, DOM und LocalStorage',
    instructor: 'Prof. Bauer',
    capacity: 28
  },
  {
    id: 5,
    title: 'Node.js Einführung',
    date: '2024-06-01',
    status: 'inactive',
    description: 'Backend-Entwicklung mit Node.js',
    instructor: 'Prof. Klein',
    capacity: 20
  }
]

// Beispieldaten für Teilnehmende
export const initialParticipantsData: Participant[] = [
  {
    id: 1,
    name: 'Anna Mueller',
    email: 'anna.mueller@example.com',
    courseId: 1,
    status: 'active',
    enrollmentDate: '2024-02-15'
  },
  {
    id: 2,
    name: 'Benjamin Schmidt',
    email: 'benjamin.schmidt@example.com',
    courseId: 1,
    status: 'active',
    enrollmentDate: '2024-02-16'
  },
  {
    id: 3,
    name: 'Clara Wagner',
    email: 'clara.wagner@example.com',
    courseId: 2,
    status: 'completed',
    enrollmentDate: '2024-03-01'
  },
  {
    id: 4,
    name: 'David Bauer',
    email: 'david.bauer@example.com',
    courseId: 2,
    status: 'active',
    enrollmentDate: '2024-03-05'
  },
  {
    id: 5,
    name: 'Emma Klein',
    email: 'emma.klein@example.com',
    courseId: 3,
    status: 'inactive',
    enrollmentDate: '2024-01-20'
  },
  {
    id: 6,
    name: 'Florian Weber',
    email: 'florian.weber@example.com',
    courseId: 4,
    status: 'active',
    enrollmentDate: '2024-04-10'
  },
  {
    id: 7,
    name: 'Greta Fischer',
    email: 'greta.fischer@example.com',
    courseId: 1,
    status: 'active',
    enrollmentDate: '2024-02-20'
  },
  {
    id: 8,
    name: 'Heinrich Keller',
    email: 'heinrich.keller@example.com',
    courseId: 5,
    status: 'inactive',
    enrollmentDate: '2024-05-15'
  }
]

// Hilfsfunktion für LocalStorage
const STORAGE_KEYS = {
  COURSES: 'courses_data',
  PARTICIPANTS: 'participants_data'
}

export const getCoursesFromStorage = (): Course[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.COURSES)
  return stored ? JSON.parse(stored) : initialCoursesData
}

export const getParticipantsFromStorage = (): Participant[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.PARTICIPANTS)
  return stored ? JSON.parse(stored) : initialParticipantsData
}

export const saveCoursesToStorage = (courses: Course[]): void => {
  localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses))
}

export const saveParticipantsToStorage = (participants: Participant[]): void => {
  localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants))
}

export const resetStorage = (): void => {
  localStorage.removeItem(STORAGE_KEYS.COURSES)
  localStorage.removeItem(STORAGE_KEYS.PARTICIPANTS)
}

// Utility Funktionen
export const getParticipantCountByCourse = (courseId: number, participants: Participant[]): number => {
  return participants.filter(p => p.courseId === courseId).length
}

export const getCourseTitle = (courseId: number, courses: Course[]): string => {
  const course = courses.find(c => c.id === courseId)
  return course ? course.title : 'Unbekannter Kurs'
}

export const getNextId = (items: Array<{id: number}>): number => {
  return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
}
