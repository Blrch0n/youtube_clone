import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
const ChannelDetail = () => {
  const { id } = useParams();
  useEffect(() => {}, []);
  return <div>{id}</div>;
};

export default ChannelDetail;
