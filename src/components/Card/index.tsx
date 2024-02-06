import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { DataType } from "../../types/components";

export const ImageCard = ({
  data,
  favorite,
  onViewMore,
  onFavorite,
}: DataType) => {
  const isFavorite = favorite?.includes(data.id);

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt={data.title_th}
        height="420"
        image={data.poster_url}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.title_th}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="text.secondary"
        >
          {data.synopsis_th}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color={isFavorite ? "error" : "default"}
          onClick={() => onFavorite(data.id)}
          aria-label="favorite"
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderRoundedIcon />}
        </IconButton>
        <Button size="small" onClick={() => onViewMore(data)}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};
