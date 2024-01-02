import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography, Paper, Grid } from "@mui/material";
import { mockBarData } from "../data/mockData";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h5" gutterBottom>
            Bar Chart
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockBarData}>
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(mockBarData[0]).map((key) => {
                // Skip 'country' and 'color' keys
                if (key !== "country" && key.indexOf("Color") === -1) {
                  const colorKey = `${key}Color`;
                  return (
                    <Bar
                      key={key.country}
                      dataKey={key}
                      fill={mockBarData[0][colorKey]}
                      name={key.split(/(?=[A-Z])/).join(" ")} // Split camelCase to space-separated
                    />
                  );
                }
                return null;
              })}
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      {/* Add more charts as needed */}
    </Grid>
  );
};

export default Dashboard;
