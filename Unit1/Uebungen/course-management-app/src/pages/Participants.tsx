import React, { useMemo, useState } from 'react'
import {
  participantsData,
  coursesData,
  Participant,
  ParticipantStatus
} from '../data/mockData'
import StatusBadge from '../components/StatusBadge'
import SearchBar from '../components/SearchBar'
import Modal from '../components/Modal'

type StatusFilter = 'all' | ParticipantStatus

function Participants(): React.ReactElement {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [selected, setSelected] = useState<Participant | null>(null)

  const getCourseTitle = (courseId: number): string => {
    const course = coursesData.find(c => c.id === courseId)
    return course ? course.title : 'Unbekannter Kurs'
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return participantsData.filter(p => {
      const matchesQuery = q === '' || p.name.toLowerCase().includes(q)
      const matchesStatus = statusFilter === 'all' || p.status === statusFilter
      return matchesQuery && matchesStatus
    })
  }, [query, statusFilter])

  const selectedCourse = selected ? coursesData.find(c => c.id === selected.courseId) : undefined

  return (
    <div>
      <h1 className="page-title">Teilnehmende</h1>

      <div className="toolbar">
        <div className="toolbar-grow">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Nach Namen suchen..."
          />
        </div>
        <label className="toolbar-field">
          <span>Status:</span>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as StatusFilter)}
            className="select-input"
          >
            <option value="all">Alle</option>
            <option value="angemeldet">Angemeldet</option>
            <option value="bestaetigt">Bestätigt</option>
            <option value="abgemeldet">Abgemeldet</option>
          </select>
        </label>
        <span className="toolbar-info">
          {filtered.length} von {participantsData.length}
        </span>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Zugewiesener Kurs</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr
                key={p.id}
                className="row-clickable"
                onClick={() => setSelected(p)}
              >
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{getCourseTitle(p.courseId)}</td>
                <td><StatusBadge kind="participant" status={p.status} /></td>
                <td>
                  <button
                    className="link-button"
                    onClick={e => { e.stopPropagation(); setSelected(p) }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="empty-state">Keine Teilnehmenden gefunden.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <dl className="detail-grid">
            <dt>Name</dt>
            <dd>{selected.name}</dd>
            <dt>E-Mail</dt>
            <dd><a href={`mailto:${selected.email}`}>{selected.email}</a></dd>
            <dt>Zugewiesener Kurs</dt>
            <dd>{selectedCourse ? selectedCourse.title : 'Unbekannter Kurs'}</dd>
            <dt>Kursdatum</dt>
            <dd>
              {selectedCourse
                ? new Date(selectedCourse.date).toLocaleDateString('de-DE')
                : '–'}
            </dd>
            <dt>Status</dt>
            <dd><StatusBadge kind="participant" status={selected.status} /></dd>
          </dl>
        </Modal>
      )}
    </div>
  )
}

export default Participants
