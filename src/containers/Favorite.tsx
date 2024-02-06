import { useEffect, useState, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { CardSkeleton, ImageCard, Layout, Modal } from "../components";
import { fetchMovies } from "../api/fetchMovie";
import { finderState } from "../atom/finder";
import { Movie } from "../types/components";

export const Favorite = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [favorite, setFavorite] = useState<string[]>(
    JSON.parse(sessionStorage.getItem("favorite")) ?? []
  );
  const searchValue = useRecoilValue(finderState);

  const getMovies = async () => {
    setIsFetching(true);
    const response = await fetchMovies();
    const movies = response.data.movies.filter((movie: Movie) =>
      favorite.includes(movie.id)
    );

    setMovieList(movies);
    setIsFetching(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("favorite", JSON.stringify(favorite));
    getMovies();
  }, [favorite]);

  const memoizedMovieList = useMemo(() => {
    const query = searchValue.toLowerCase();

    if (!query.trim()) {
      return movieList;
    }

    return movieList.filter(
      (item) => item.title_th.toLowerCase().indexOf(query) >= 0
    );
  }, [searchValue, movieList]);

  const onViewMore = (movie: Movie) => {
    setIsOpen(true);
    setSelectedMovie(movie);
  };

  const onFavorite = (movieId: string) => {
    if (favorite.includes(movieId)) {
      setFavorite(favorite.filter((item) => item !== movieId));
      return;
    }
    setFavorite([...favorite, movieId]);
  };

  const onCloseViewMore = () => {
    setIsOpen(false);
  };

  return (
    <Layout>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {!isFetching && memoizedMovieList.length === 0 && (
          <Typography variant="h5" component="div">
            No Favorite Movie
          </Typography>
        )}

        {isFetching ? (
          <CardSkeleton />
        ) : (
          memoizedMovieList.map((movie: Movie) => (
            <Grid key={movie.id} sx={{ margin: 1 }}>
              <ImageCard
                data={movie}
                onViewMore={onViewMore}
                onFavorite={onFavorite}
                favorite={favorite}
              />
            </Grid>
          ))
        )}
        <Modal
          onClose={onCloseViewMore}
          selectedMovie={selectedMovie}
          isOpen={isOpen}
        />
      </Grid>
    </Layout>
  );
};
