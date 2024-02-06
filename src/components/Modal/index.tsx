import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Modal as UIModal,
} from "@mui/material";
import { Chip } from "@mui/material-next";
import { ModalType } from "../../types/components";

export const Modal = ({ selectedMovie, onClose, isOpen }: ModalType) => {
  return (
    <UIModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="movie-modal-title"
      aria-describedby="movie-modal-description"
    >
      <Paper sx={style}>
        <Grid container>
          <Grid xs={6}>
            <Card>
              <CardMedia
                component="img"
                alt={selectedMovie?.title_th}
                height="auto"
                image={selectedMovie?.poster_url}
              />
            </Card>
          </Grid>
          <Grid xs={6}>
            <Box sx={{ p: 2 }}>
              <Typography id="movie-modal-title" variant="h5" component="h5">
                {selectedMovie?.title_th}
              </Typography>
              <Typography id="movie-modal-description" sx={{ mt: 2 }}>
                <Chip color="info" label="เรื่องย่อ" sx={{ m: 1 }} />
                {selectedMovie?.synopsis_th}
              </Typography>
              <Divider />
              <Typography id="movie-modal-genre">
                <Chip label="ประเภท" sx={{ m: 1 }} />
                {selectedMovie?.genre}
              </Typography>
              <Typography id="movie-modal-actor">
                <Chip label="แสดงโดย" sx={{ m: 1 }} /> {selectedMovie?.actor}
              </Typography>
              <Chip
                label={`เวลา ${selectedMovie?.duration} นาที`}
                color="primary"
              />
              <Typography id="movie-modal-release-date" sx={{ mt: 2 }}>
                <Chip label="ฉายเมื่อ" color="primary" />{" "}
                {selectedMovie?.release_date}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </UIModal>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 2,
};
