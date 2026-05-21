// Typen für die Anwendung
export type CourseStatus = 'active' | 'inactive'
export type ParticipantStatus = 'angemeldet' | 'bestaetigt' | 'abgemeldet'

export interface Course {
  id: number
  title: string
  date: string
  status: CourseStatus
  description: string
  capacity: number
}

export interface Participant {
  id: number
  name: string
  email: string
  courseId: number
  status: ParticipantStatus
}

// Beispieldaten für Kurse
export const coursesData: Course[] = [
  {
    id: 1,
    title: 'React Grundlagen',
    date: '2024-03-15',
    status: 'active',
    description: 'Einführung in React und funktionale Komponenten',
    capacity: 20
  },
  {
    id: 2,
    title: 'JavaScript Fortgeschrittene',
    date: '2024-04-20',
    status: 'active',
    description: 'Asynchrone Programmierung und APIs',
    capacity: 16
  },
  {
    id: 3,
    title: 'CSS und responsive Design',
    date: '2024-02-10',
    status: 'inactive',
    description: 'Modernes CSS mit Flexbox und Grid',
    capacity: 12
  },
  {
    id: 4,
    title: 'Web APIs',
    date: '2024-05-05',
    status: 'active',
    description: 'Arbeit mit Fetch, DOM und LocalStorage',
    capacity: 18
  },
  {
    id: 5,
    title: 'Node.js Einführung',
    date: '2024-06-01',
    status: 'inactive',
    description: 'Backend-Entwicklung mit Node.js',
    capacity: 15
  }
]

// Beispieldaten für Teilnehmende
export const participantsData: Participant[] = [
  { id: 1, name: 'Anna Mueller', email: 'anna.mueller@example.com', courseId: 1, status: 'bestaetigt' },
  { id: 2, name: 'Benjamin Schmidt', email: 'benjamin.schmidt@example.com', courseId: 1, status: 'bestaetigt' },
  { id: 3, name: 'Clara Wagner', email: 'clara.wagner@example.com', courseId: 2, status: 'angemeldet' },
  { id: 4, name: 'David Bauer', email: 'david.bauer@example.com', courseId: 2, status: 'bestaetigt' },
  { id: 5, name: 'Emma Klein', email: 'emma.klein@example.com', courseId: 3, status: 'abgemeldet' },
  { id: 6, name: 'Florian Weber', email: 'florian.weber@example.com', courseId: 4, status: 'bestaetigt' },
  { id: 7, name: 'Greta Fischer', email: 'greta.fischer@example.com', courseId: 1, status: 'angemeldet' },
  { id: 8, name: 'Heinrich Keller', email: 'heinrich.keller@example.com', courseId: 5, status: 'angemeldet' }
]

export const participantStatusLabel = (s: ParticipantStatus): string => {
  switch (s) {
    case 'angemeldet': return 'Angemeldet'
    case 'bestaetigt': return 'Bestätigt'
    case 'abgemeldet': return 'Abgemeldet'
  }
}

export const courseStatusLabel = (s: CourseStatus): string =>
  s === 'active' ? 'Aktiv' : 'Inaktiv'
