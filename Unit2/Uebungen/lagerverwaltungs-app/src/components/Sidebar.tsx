import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/',           label: 'Dashboard',     icon: '🏠', end: true },
  { to: '/artikel',    label: 'Artikel',       icon: '📦' },
  { to: '/warnungen',  label: 'Warnungen',     icon: '⚠️' },
  { to: '/einstellungen', label: 'Einstellungen', icon: '⚙️' }
]

// Sidebar-Navigation – wird auf allen Seiten angezeigt
// TODO: Weitere Navigationspunkte (Artikel, Warnungen, Einstellungen) hinzufügen
function Sidebar(): React.ReactElement {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-icon">📦</span>
        <span className="sidebar-title">Lagerverwaltung</span>
      </div>




      <nav>








      <ul className="nav-menu">
  {items.map(item => (
    <li key={item.to} className="nav-item">
      <NavLink
        to={item.to}
        end={item.end}
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        <span className="nav-icon">{item.icon}</span>
        {item.label}
      </NavLink>
    </li>
  ))}
</ul>









      </nav>
    </aside>
  )
}

export default Sidebar
