import { Box } from "@mui/material";
import Header from "../../Components/admin/Dash/Header";
import PieChart from "../../Components/admin/Dash/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
