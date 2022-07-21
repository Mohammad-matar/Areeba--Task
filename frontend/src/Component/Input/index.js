import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import "./style.css";

export default function Input() {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleChangePhone = (value) => {
        setData({ ...data, phone_number: value });
    };

    const addCustomer = () => {
        axios
            .post(`http://localhost:3000/customers`, data)
            .then((res) => {
                setData({});
                alert("Customer added successfully");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="input-box">
                <div className="input-heading">
                    <h2>Add New Customer</h2>
                </div>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        name="name"
                        value={data.name ? data.name : ""}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Address"
                        name="address"
                        value={data.address ? data.address : ""}
                        onChange={handleChange}
                    />
                    <MuiPhoneNumber
                        defaultCountry={"lb"}
                        name="phone_number"
                        value={data.phone_number ? data.phone_number : ""}
                        onChange={handleChangePhone}
                    />
                </Box>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" onClick={addCustomer}>
                        Submit
                    </Button>
                </Stack>
            </div>
        </>
    );
}
