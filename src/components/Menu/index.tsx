import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  styled,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Paper,
  ListItemButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InputBase from "@mui/material/InputBase";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { finderState } from "../../atom/finder";
import { routerPath } from "../../constants/routerPath";

export const Menu = () => {
  const [text, setText] = useState("");
  const setTextFinder = useSetRecoilState(finderState);
  const navigate = useNavigate();
  const searchValue = useSetRecoilState(finderState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextFinder(text);
      clearTimeout(timer);
    }, 500);
  }, [text]);

  const onChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setText(_event.target.value);
  };

  const onClickHome = () => {
    searchValue("");
    setText("");
    navigate(routerPath.root);
  };

  const onClickFavorite = () => {
    searchValue("");
    setText("");
    navigate(routerPath.favorite);
  };

  const onLogout = () => {
    sessionStorage.setItem("user", "");
    sessionStorage.setItem("favorite", "[]");
    navigate(routerPath.login);
  };

  return (
    <ContainerStyle>
      <Stack direction="column" spacing={1}>
        <ListItem>
          <Paper
            elevation={1}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              flex: 1,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              onChange={onChange}
              placeholder="Movie Finder"
              value={text}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </ListItem>
        <ListItemButton onClick={onClickHome}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={onClickFavorite}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="My Favorite" />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={onLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontWeight: "medium",
              variant: "body2",
            }}
          />
        </ListItemButton>
      </Stack>
    </ContainerStyle>
  );
};

const ContainerStyle = styled(Box)({
  background: "#fafafa",
  height: "calc(100vh - 64px)",
  padding: "10px",
});
