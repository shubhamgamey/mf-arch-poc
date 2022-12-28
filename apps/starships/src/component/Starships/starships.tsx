import { DataList, Loading } from '@ui';
import { useQuery } from 'react-query';

interface Starship {
  name: string;
  url: string;
}

const getStarships = async () => {
  const res = await fetch('https://swapi.dev/api/starships/');
  const data = await res.json();

  return data.results;
};

const Starships = () => {
  const { isLoading, data } = useQuery<Array<Starship>>('starships', getStarships, { staleTime: Infinity });

  if (isLoading || !data) return <Loading />

  return (
    <div>
      <h1>Welcome to New Starships!</h1>
      <DataList items={data.map(item => ({ title: item.name, url: item.url }))} />
    </div>
  );
}

export default Starships
