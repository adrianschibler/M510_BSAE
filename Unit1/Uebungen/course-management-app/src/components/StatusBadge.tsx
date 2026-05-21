import React from 'react'
import {
  CourseStatus,
  ParticipantStatus,
  participantStatusLabel,
  courseStatusLabel
} from '../data/mockData'

type Props =
  | { kind: 'course'; status: CourseStatus }
  | { kind: 'participant'; status: ParticipantStatus }

function StatusBadge(props: Props): React.ReactElement {
  if (props.kind === 'course') {
    const cls = props.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'
    return <span className={cls}>{courseStatusLabel(props.status)}</span>
  }

  const map: Record<ParticipantStatus, string> = {
    angemeldet: 'badge badge-pending',
    bestaetigt: 'badge badge-active',
    abgemeldet: 'badge badge-inactive'
  }
  return <span className={map[props.status]}>{participantStatusLabel(props.status)}</span>
}

export default StatusBadge
