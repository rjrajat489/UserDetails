import React from "react";
import DisplayUser from "./DisplayUser";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { getAllUser } from "./services/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
export default function GetUser() {

  const {isloading,users,error}=useSelector((state)=>state)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllUser())
  },[])
  return (

    <div>
      {isloading &&<h1>Data is loading.....</h1> }
      {error &&<h1>Oops, an error occurred</h1> }
      {!error && !isloading && <div><DisplayUser details={users} />
      <Button variant="contained" color="success" className="submit"><NavLink to="/AddUser">Add User</NavLink></Button></div>}
    </div>
  );
}