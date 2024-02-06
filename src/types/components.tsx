export type Movie = {
  id: string;
  title_th: string;
  synopsis_th: string;
  poster_url: string;
  release_date: string;
  rating: string;
  genre: string;
  duration: number;
  actor: string;
};

export type DataType = {
  data: Movie;
  favorite: string[];
  onViewMore: (movie: Movie) => void;
  onFavorite: (movieId: string) => void;
};

export type ModalType = {
  onClose: () => void;
  isOpen: boolean;
  selectedMovie: Movie | undefined;
};
