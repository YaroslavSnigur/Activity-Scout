import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function PostCreatePage() {
  const [form, setForm] = useState({
    author: "admin",
    locationName: "",
    address: "",
    tags: [],
    fee: "",
    description: "",
    //leave blank for photo
  });
  const formRef = React.createRef();
  //   const [user, setUsers] = useState([]);

  //   useEffect(() => {
  //     getRoles();
  //   }, []);

  const getUsers = async () => {
    //CHANGE TO USER LATERON
    // try {
    //   const response = await fetch("/api/roles");
    //   const rolesRes = await response.json();
    //   setRoles(rolesRes.response);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleChange = (e) => {
    console.log("---------------", e.target.checkValidity());
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createPost = async () => {
    if (!formRef.current.checkValidity()) return;
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setForm({
        author: "admin",
        locationName: "",
        address: "",
        tags: [],
        fee: "",
        description: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="PostCreatePage">
      <AppBar position="static">
        <Typography
          variant="h3"
          noWrap
          component="h1"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Creating A New Spot
        </Typography>
      </AppBar>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        ref={formRef}
      >
        <br />
        <TextField
          id="outlined-basic"
          label="LocationName"
          variant="outlined"
          name="LocationName"
          value={form.LocationName || ""}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          label="address"
          variant="outlined"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          label="tags"
          variant="outlined"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          label="fee"
          variant="outlined"
          name="fee"
          value={form.fee}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <br />
        {/* <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.role}
            name="role"
            label="Role"
            onChange={handleChange}
          >
            {roles &&
              roles.map((r) => (
                <MenuItem key={r._id} value={r._id}>
                  {r.title} {r.isManager ? " / Manager" : ""}
                </MenuItem>
              ))}
          </Select>
        </FormControl> */}
        <Link to="/">
          <Button variant="contained" onClick={createPost}>
            Create
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default PostCreatePage;
