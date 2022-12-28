import { Card, Loading } from '@ui';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

interface Film {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  episode_id: string;
}

const getFilm = async (id: string | undefined) => {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const data = await res.json();

  return data;
};

const Film = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery<Film>(`film/${id}`, () => getFilm(id), { staleTime: Infinity });

  if (isLoading || !data) return <Loading />

  return (
    <Card title={data.title} description={data.opening_crawl}>
      <FilmInfo {...data} />
    </Card>
  )
}

const FilmInfo = (props: Film) => (
  <>
    <p>Director: {props.director}</p>
    <p>Producers: {props.producer}</p>
    <p>Episode: {props.episode_id}</p>
  </>
)

export default Film
