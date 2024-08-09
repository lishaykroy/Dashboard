import { Box , Typography , useTheme } from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {

    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", headerClassName: 'super-app-theme--header', },
        { field: "name", headerName: "Name", flex: 1, headerClassName: 'super-app-theme--header', cellClassName: "name-column--cell", },
        { field: "phone", headerName: "Phone Number", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "email", headerName: "Email", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "cost", headerName: "Cost", headerAlign: "center", align: "center", flex: 1, headerClassName: 'super-app-theme--header', 
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]} sx={{ m: "15px auto" }}>
                  ${params.row.cost}
                </Typography>
              ),
        },
        { field: "date", headerName: "Date", flex: 1, headerClassName: 'super-app-theme--header', },
      ];

    return (
        <Box m="0 20px">
          <Header title="Invoices" subtitle="List of Invoice balances" />
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
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} components={{ Toolbar: GridToolbar }}/>
          </Box>
        </Box>
    );
};

export default Invoices;