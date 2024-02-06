import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { AppBarComponent, Menu } from "..";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container>
      <Grid xs={12}>
        <AppBarComponent />
      </Grid>
      <Grid xs={2}>
        <Menu />
      </Grid>
      <Grid xs={10}>
        <ContainerStyle>{children}</ContainerStyle>
      </Grid>
    </Grid>
  );
};

const ContainerStyle = styled(Box)({
  height: "calc(100vh - 64px)",
  overflow: "auto",
  padding: "10px",
});
