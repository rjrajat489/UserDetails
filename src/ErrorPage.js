import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function ErrorPage() {
  return (
    <div>
      <h3>Error Occured while Adding the user</h3>
      <h3> <Button size="small" variant="contained" color="success" className="submit"><NavLink to="/AddUser"><NavLink to="/">Click Here </NavLink></NavLink></Button> to go to the hope page again</h3>
    </div>
  )
}
