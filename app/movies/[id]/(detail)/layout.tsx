import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import SkeletonMovieInfo from '../../../../components/skeleton/movie-info';
import { getMovie } from '../../../api/api';

export interface IParams {
  id: string;
}

export const generateMetadata = async ({
  params: { id },
}: {
  params: IParams;
}) => {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

export default function MovieDetailLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: IParams;
}) {
  return (
    <>
      <Suspense fallback={<SkeletonMovieInfo />}>
        <MovieInfo id={id} />
      </Suspense>
      {children}
    </>
  );
}
