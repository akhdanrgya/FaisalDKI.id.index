import React from "react";
import "../../Pages/admin.css";
import { useState } from "react";
import Sidebar from "../../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Calendar from "../../scenes/calendar/calendar";
import { ColorModeContext, useMode } from "../../theme";
// testing side
import Contacts from "../../scenes/contacts";

const AdminCalendar = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

    return(
        <ColorModeContext.Provider value={colorMode}>

        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
              <Calendar/>
          </main>
        </div>

    </ColorModeContext.Provider>
    )

};

export default AdminCalendar
