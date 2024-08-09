import { Box , Typography , useTheme } from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {

    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", headerClassName: 'super-app-theme--header',},
        { field: "name", headerName: "Name", flex: 1, headerClassName: 'super-app-theme--header', cellClassName: "name-column--cell", },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", headerClassName: 'super-app-theme--header', },
        { field: "phone", headerName: "Phone Number", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "email", headerName: "Email", flex: 1, headerClassName: 'super-app-theme--header', },
        { field: "accessLevel", headerAlign: "center", align: "center", headerName: "Access Level", headerClassName: 'super-app-theme--header', flex: 1,
          renderCell: ({ row: { access } }) => {
            return (
              <Box width="60%" m="10px auto" p="5px" display="flex" justifyContent="center" borderRadius="4px"
                backgroundColor={ access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700] }>
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];

    return (
        <Box m="0 20px">
          <Header title="Team" subtitle="Manage the members of the team" />
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
            <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}/>
          </Box>
        </Box>
    );
};

export default Team;