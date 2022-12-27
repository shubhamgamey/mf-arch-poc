import { Card, Loading } from '@ui';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const getPlanet = async (id: string | undefined) => {
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);
  const data = await res.json();

  return data;
};

const Planet = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery<Planet>(`planet/${id}`, () => getPlanet(id), { staleTime: Infinity });

  if (isLoading || !data) return <Loading />

  console.log(data)
  return (
    <Card title={data.name}>
      <PlanetInfo {...data} />
    </Card>
  )
}

const PlanetInfo = (props: Planet) => (
  <>
    <p>Climate: {props.climate}</p>
    <p>Terrain: {props.terrain}</p>
    <p>Population: {props.population}</p>
  </>
)

export default Planet
