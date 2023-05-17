import React from "react";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Sidebar from "../../scenes/global/Sidebar";
import Team from "../../scenes/team";
import "../../Pages/admin.css"

const AdminTeam = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>

        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
              <Team/>
          </main>
        </div>

    </ColorModeContext.Provider>
  )
};

export default AdminTeam;
