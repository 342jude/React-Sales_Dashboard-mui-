import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Heading from "./components/heading";
import Slidebar from "./components/slidebar";
import Transaction from "./components/transaction";
import Dashboard from "./components/dashboard";

function App() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://raw.githubusercontent.com/FullstackAcademy/TheSalesDashboard.Data-JSON-/main/data.json"
  //         );
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading />
        </Grid>
        <Grid item xs={12} md={4}>
          <Slidebar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Dashboard  />
        </Grid>
        <Grid item xs={12}>
          <Transaction />
        </Grid>
      </Grid>
    </Container>
  );
  // }

  // return (
  //   <Container maxWidth="lg">
  //     <Heading />
  //     <Grid container spacing={3}>
  //       <Grid item xs={12} md={4}>
  //         <Slidebar />
  //       </Grid>
  //       <Grid item xs={12} md={8}>
  //         <Transaction />
  //       </Grid>
  //     </Grid>
  //   </Container>
  // );
}

export default App;
