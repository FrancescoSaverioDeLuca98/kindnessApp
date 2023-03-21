import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Link from "@material-ui/core/Link";
import { useRouter } from 'next/router'

/*export default function DataTable({rows , columns , pageSize , rowsPerPageOptions}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        style={{backgroundColor : "white"}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}*/




const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'details',
    headerName: 'Details',
    description: 'This column has detail of user.',
    sortable: false,
    width: 160,
    renderCell: () => (
      <Link className='cursor-pointer'>Dettagli</Link>
    )
  },
];



const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: "Name", age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function DataTable() {


  const router = useRouter()

  function handleEvent(e) {
    if (e.field && e.row) {
      let clickedFiled = e.field
      let id = e.row.id
      if (clickedFiled === "details") {
        let path = "/profile/" + id
        router.push(path)
      }
    }
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        style={{ backgroundColor: "white" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={handleEvent}

      />
      
    </div>
  );
}




