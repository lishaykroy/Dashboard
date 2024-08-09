import { Box , useTheme } from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {

    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", headerClassName: 'super-app-theme--header', flex: 0.5, },
        { field: "registrarId", headerName: "Registrar ID", headerClassName: 'super-app-theme--header', },
        { field: "name", headerName: "Name", flex: 1, headerClassName: 'super-app-theme--header', cellClassName: "name-column--cell", },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", headerClassName: 'super-app-theme--header', },
        { field: "phone", headerName: "Phone Number", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "email", headerName: "Email", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "address", headerName: "Address", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "city", headerName: "City", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "zipCode", headerName: "Zip Code", flex: 1, headerClassName: 'super-app-theme--header', },
      ];

    return (
        <Box m="0 20px">
          <Header title="Contacts" subtitle="List of contacts for future reference" />
          <Box m="10px 0 0 0" height="75vh"
            sx={{ "& .MuiDataGrid-root": { border: "none", },
                  "& .MuiDataGrid-cell": { borderBottom: "none", },
                  "& .name-column--cell": { color: colors.greenAccent[300], },
                  "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400], },
                  "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700], },
                  "& .super-app-theme--header": { bgcolor: colors.blueAccent[700], },
                  "& .MuiCheckbox-root": { color: colors.greenAccent[200] , backgroundColor: colors.blueAccent[700], },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` , },
                }}>
            <DataGrid checkboxSelection rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }}/>
          </Box>
        </Box>
    );
};

export default Contacts;