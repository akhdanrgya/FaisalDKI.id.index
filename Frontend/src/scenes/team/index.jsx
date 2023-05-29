import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../Components/admin/Dash/Header";
import axios from "axios";
import { useState, useEffect } from "react";

const Team = () => {
  const [pendukung, setPendukung] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const port = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    getPendukung();
  }, []);

  const getPendukung = async () => {
    const response = await axios.get(`${port}/pendukung`);
    setPendukung(response.data);
  };


  const columns = [
    { field: "id", headerName: "NO" },
    {
      field: "nama",
      headerName: "Nama",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "kecamatan",
      headerName: "Kecamatan",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "hp",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "nik",
      headerName: "NIK",
      flex: 1,
      align: "left",
      headerAlign: "left"
    },
  ];

  return (
    <Box m="20px">
      <Header title="PENDUKUNG" subtitle="Data Pendukung" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={pendukung} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
