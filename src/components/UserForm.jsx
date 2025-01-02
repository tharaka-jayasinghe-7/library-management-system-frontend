import {
  Button,
  Card,
  CardContent,
  Grid2,
  Input,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Grid2
      container
      spacing={2}
      sx={{
        padding: "20px",
        width: "100%",
        justifyContent: "center", // Center the form horizontally
      }}
    >
      {/* Card with Drop Shadow */}
      <Grid2 item xs={12} sm={8} md={6}>
        <Card
          sx={{
            boxShadow: 3, // Material UI's built-in drop shadow
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <CardContent>
            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                color: "#000000",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              User Form
            </Typography>

            {/* Form Fields in Row */}
            <Grid2
              container
              item
              xs={12}
              spacing={3}
              sx={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "nowrap", // Prevent wrapping of fields
              }}
            >
              {/* Name Field */}
              <Grid2 item xs={12} sm={6} md={3}>
                <Typography
                  component={"label"}
                  htmlFor="name"
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Name
                </Typography>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  fullWidth
                  sx={{ marginBottom: "16px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid2>

              {/* Email Field */}
              <Grid2 item xs={12} sm={6} md={3}>
                <Typography
                  component={"label"}
                  htmlFor="email"
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </Typography>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  fullWidth
                  sx={{ marginBottom: "16px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid2>

              {/* Mobile Field */}
              <Grid2 item xs={12} sm={6} md={3}>
                <Typography
                  component={"label"}
                  htmlFor="mobile"
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Mobile
                </Typography>
                <Input
                  type="text"
                  id="mobile"
                  name="mobile"
                  fullWidth
                  sx={{ marginBottom: "16px" }}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Grid2>

              {/* Address Field */}
              <Grid2 item xs={12} sm={6} md={3}>
                <Typography
                  component={"label"}
                  htmlFor="address"
                  sx={{
                    color: "#000000",
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Address
                </Typography>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  fullWidth
                  sx={{ marginBottom: "16px" }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid2>
            </Grid2>

            {/* Add Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#00c6e6",
                  color: "#000000",
                  width: "auto",
                  "&:hover": { backgroundColor: "#00a8c4" },
                }}
              >
                Add
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default UserForm;
