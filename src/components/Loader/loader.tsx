"use client";

import { Backdrop, CircularProgress } from "@mui/material";
import React, { FC } from "react";
import { TLoaderProps } from "./TLoader";

export const Loader: FC<TLoaderProps> = ({ handleClose, open }) => {
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
