import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { produkte } from '../data/mockData'

const spalten: GridColDef[] = [
  { field: 'artikelnummer', headerName: 'Artikelnummer', width: 130 },
  { field: 'name', headerName: 'Name', flex: 1 },
  // weitere Spalten...
]

export default function ProduktDataGrid() {
  return (
    <DataGrid
      rows={produkte}
      columns={spalten}
      pageSizeOptions={[10, 25, 50]}
    />
  )
}