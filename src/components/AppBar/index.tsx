import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import WavingHandIcon from "@mui/icons-material/WavingHand";

export const AppBarComponent = () => {
  const username = sessionStorage.getItem("user");

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "flex-end" }} disableGutters>
          <WavingHandIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "flex-end",
            }}
          >
            Welcome, {username}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
