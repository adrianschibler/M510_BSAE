import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { produkte } from '../data/mockData'





const spalten: GridColDef[] = [
  { field: 'artikelnummer', headerName: 'Artikelnummer', width: 130 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'kategorie', headerName: 'Kategorie', flex: 1 },  
  { field: 'lagerbestand', headerName: 'Lagerbestand', flex: 1, valueGetter: (_value, row) => `${row.lagerbestand} ${row.einheit}`, },



  { field: 'mindestbestand', headerName: 'Mindestbestand', flex: 1 },
  { field: 'preis', headerName: 'Preis', flex: 1 },
  { field: 'standort', headerName: 'Standort', flex: 1 },
     
  

]

export default function ProduktDataGrid() {
  return (
   <DataGrid
  rows={produkte}
  columns={spalten}
  pageSizeOptions={[10, 25, 50]}
  initialState={{
    pagination: {
      paginationModel: { pageSize: 25, page: 0 },
    },
  }}

  getRowClassName={(params) =>
    params.row.lagerbestand < params.row.mindestbestand ? 'row-warn' : ''
  }
  sx={{
    '& .row-warn': {
      backgroundColor: '#fff3cd',  // oder was du willst
    },
  }}


/>

  )
}