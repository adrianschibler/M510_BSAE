import React, { useMemo } from 'react'
import { coursesData, participantsData } from '../data/mockData'
import StatusBadge from '../components/StatusBadge'

function Dashboard(): React.ReactElement {
  const totalCourses = coursesData.length
  const activeCourses = coursesData.filter(c => c.status === 'active').length
  const totalParticipants = participantsData.length
  const confirmedParticipants = participantsData.filter(p => p.status === 'bestaetigt').length

  const enrolledCount = useMemo(() => {
    const map = new Map<number, number>()
    for (const p of participantsData) {
      map.set(p.courseId, (map.get(p.courseId) ?? 0) + 1)
    }
    return map
  }, [])

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>

      <div className="dashboard-stats">
        <div className="stat-box">
          <div className="stat-number">{totalCourses}</div>
          <div className="stat-label">Gesamtkurse</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{activeCourses}</div>
          <div className="stat-label">Aktive Kurse</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{totalParticipants}</div>
          <div className="stat-label">Teilnehmende</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{confirmedParticipants}</div>
          <div className="stat-label">Bestätigt</div>
        </div>
      </div>

      <h2 className="section-title">Aktuelle Kurse</h2>

      <div className="cards-container">
        {coursesData
          .filter(course => course.status === 'active')
          .map(course => {
            const count = enrolledCount.get(course.id) ?? 0
            return (
              <div key={course.id} className="card">
                <div className="card-title">{course.title}</div>
                <div className="card-content">
                  <p><strong>Datum:</strong> {new Date(course.date).toLocaleDateString('de-DE')}</p>
                  <p><strong>Belegung:</strong> {count} / {course.capacity}</p>
                  <p>{course.description}</p>
                  <StatusBadge kind="course" status={course.status} />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Dashboard
