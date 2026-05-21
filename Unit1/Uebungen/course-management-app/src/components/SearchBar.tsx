import React from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchBar({ value, onChange, placeholder }: Props): React.ReactElement {
  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder ?? 'Suchen...'}
        aria-label="Suchen"
      />
    </div>
  )
}

export default SearchBar
