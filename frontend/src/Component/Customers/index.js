import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./style.css";
import { TextField } from "@mui/material";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios
      .get(`http://localhost:3000/customers`)
      .then((res) => setCustomers(res.data.data))
      .catch((err) => console.log(err));
  };

  const deleteCustomer = (id) => {
    axios
      .delete(`http://localhost:3000/customers/${id}`)
      .then((res) => {
        getCustomers();
        alert("Customer deleted successfully");
      })
      .catch((err) => console.log(err));
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [newcustomer, setnewCustomer] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getCustomerById = (id) => {
    axios
      .get(`http://localhost:3000/customers/${id}`)
      .then((res) => {
        const { name, address, phone_number } = res.data.response;
        setnewCustomer({ id, name, address, phone_number });
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    setnewCustomer({ ...newcustomer, [e.target.name]: e.target.value });
  };

  const addNewCustomer = () => {
    axios
      .put(`http://localhost:3000/customers/${newcustomer.id}`, newcustomer)
      .then((res) => {
        console.log(res)
        handleClose();
        setnewCustomer({});
        getCustomers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cusomers-container">
        <div className="customers-title">
          <h2>Customers</h2>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers &&
                customers.map((customer) => {
                  return (
                    <TableRow
                      key={customer._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{customer._id}</TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.address}</TableCell>
                      <TableCell>{customer.phone_number}</TableCell>
                      <TableCell>
                        <Stack
                          spacing={2}
                          direction="row"
                          justifyContent="center"
                        >
                          <Button variant="contained" onClick={() => {
                            handleOpen();
                            getCustomerById(customer._id);
                          }}>Edit</Button>
                          <Button variant="contained" onClick={() => deleteCustomer(customer._id)}>Delete</Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit your Customer
                              </Typography>
                              <legend >Name: <input placeholder="name" name="name" defaultValue={newcustomer.name} onChange={handleChange}></input></legend>
                              <br />
                              <legend>Address: <input placeholder="address" name="address" defaultValue={newcustomer.address} onChange={handleChange}></input></legend>
                              <br />
                              <legend> Phone Number: <input placeholder="phone_number" name="phone_number" defaultValue={newcustomer.phone_number} onChange={handleChange}></input></legend>
                              <button onClick={addNewCustomer}> Update Data </button>
                            </Box>
                          </Modal>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}


