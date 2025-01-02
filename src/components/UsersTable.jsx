import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { board: 0 } }}
            >
              <TableCell component={"th"}>{row.name}</TableCell>
              <TableCell component={"th"}>{row.email}</TableCell>
              <TableCell component={"th"}>{row.address}</TableCell>
              <TableCell component={"th"}>{row.mobile}</TableCell>
              <TableCell>
                <Button sx={{ margin: "0px 10px" }} onClick={() => {}}>
                  Update
                </Button>
                <Button sx={{ margin: "0px 10px" }} onClick={() => {}}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
