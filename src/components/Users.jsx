import React from "react";
import UserForm from "./UserForm";
import { Grid2 } from "@mui/material";
import UsersTable from "./UsersTable";

const users = [
  {
    id: 1,
    name: "Tharaka",
    email: "t@gmail.com",
    mobile: "0123456789",
    address: "colombo",
  },
  {
    id: 2,
    name: "Tharaka2",
    email: "t@gmail.com2",
    mobile: "0123456789",
    address: "colombo2",
  },
];

function Users() {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column", // Ensure components are stacked vertically
      }}
    >
      {/* User Form */}
      <Grid2 item xs={12} sx={{ marginBottom: "20px" }}>
        <UserForm />
      </Grid2>

      {/* Users Table */}
      <Grid2 item xs={12}>
        <UsersTable rows={users} />
      </Grid2>
    </Grid2>
  );
}

export default Users;
