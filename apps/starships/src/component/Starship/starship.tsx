import { Card, Loading } from '@ui';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

interface Starship {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const getStarship = async (id: string | undefined) => {
  const res = await fetch(`https://swapi.dev/api/starships/${id}`);
  const data = await res.json();

  return data;
};

const Starship = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery<Starship>(`starship/${id}`, () => getStarship(id), { staleTime: Infinity });

  if (isLoading || !data) return <Loading />

  return (
    <Card title={data.name}>
      <StarshipInfo {...data} />
    </Card>
  )
}

const StarshipInfo = (props: Starship) => (
  <>
    <p>Climate: {props.climate}</p>
    <p>Terrain: {props.terrain}</p>
    <p>Population: {props.population}</p>
  </>
)

export default Starship
