import React from 'react'
import { articles } from '../data/mockData'

// Artikelseite - zeigt alle Artikel in einer Tabelle an
function Articles(): React.ReactElement {
  return (
    <div>
      <h1 className="page-title">Artikel</h1>
      <p className="page-subtitle">Alle Lagerartikel im Ueberblick</p>

      <table className="articles-table">
        <thead>
          <tr>
            <th>Artikel</th>
            <th>Nummer</th>
            <th>Kategorie</th>
            <th>Lagerort</th>
            <th>Bestand</th>
            <th>Mindestbestand</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(a => (
            <tr key={a.articleNumber}>
              <td>{a.name}</td>
              <td>{a.articleNumber}</td>
              <td>{a.category}</td>
              <td>{a.location}</td>
              <td>{a.stock}</td>
              <td>{a.minStock}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Articles