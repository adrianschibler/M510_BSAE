import React, { useMemo, useState } from 'react'
import { coursesData, participantsData, Course, CourseStatus } from '../data/mockData'
import StatusBadge from '../components/StatusBadge'
import Modal from '../components/Modal'

type StatusFilter = 'all' | CourseStatus

function Courses(): React.ReactElement {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [selected, setSelected] = useState<Course | null>(null)

  const enrolledCount = useMemo(() => {
    const map = new Map<number, number>()
    for (const p of participantsData) {
      map.set(p.courseId, (map.get(p.courseId) ?? 0) + 1)
    }
    return map
  }, [])

  const filtered = useMemo(
    () => coursesData.filter(c => statusFilter === 'all' || c.status === statusFilter),
    [statusFilter]
  )

  const selectedParticipants = selected
    ? participantsData.filter(p => p.courseId === selected.id)
    : []

  return (
    <div>
      <h1 className="page-title">Kurse</h1>

      <div className="toolbar">
        <label className="toolbar-field">
          <span>Status:</span>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as StatusFilter)}
            className="select-input"
          >
            <option value="all">Alle</option>
            <option value="active">Aktiv</option>
            <option value="inactive">Inaktiv</option>
          </select>
        </label>
        <span className="toolbar-info">{filtered.length} von {coursesData.length} Kursen</span>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Kurstitel</th>
              <th>Datum</th>
              <th>Status</th>
              <th>Teilnehmende</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(course => {
              const count = enrolledCount.get(course.id) ?? 0
              return (
                <tr
                  key={course.id}
                  className="row-clickable"
                  onClick={() => setSelected(course)}
                >
                  <td>{course.title}</td>
                  <td>{new Date(course.date).toLocaleDateString('de-DE')}</td>
                  <td><StatusBadge kind="course" status={course.status} /></td>
                  <td>{count}/{course.capacity}</td>
                  <td>
                    <button
                      className="link-button"
                      onClick={e => { e.stopPropagation(); setSelected(course) }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              )
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="empty-state">Keine Kurse gefunden.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <dl className="detail-grid">
            <dt>Datum</dt>
            <dd>{new Date(selected.date).toLocaleDateString('de-DE')}</dd>
            <dt>Status</dt>
            <dd><StatusBadge kind="course" status={selected.status} /></dd>
            <dt>Belegung</dt>
            <dd>{selectedParticipants.length} / {selected.capacity}</dd>
            <dt>Beschreibung</dt>
            <dd>{selected.description}</dd>
          </dl>

          <h3 className="detail-subtitle">Teilnehmende ({selectedParticipants.length})</h3>
          {selectedParticipants.length === 0 ? (
            <p className="muted">Noch keine Teilnehmenden zugeordnet.</p>
          ) : (
            <ul className="detail-list">
              {selectedParticipants.map(p => (
                <li key={p.id}>
                  {p.name} <span className="muted">— {p.email}</span>{' '}
                  <StatusBadge kind="participant" status={p.status} />
                </li>
              ))}
            </ul>
          )}
        </Modal>
      )}
    </div>
  )
}

export default Courses
