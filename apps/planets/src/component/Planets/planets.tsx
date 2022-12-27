import { DataList, Loading } from '@ui';
import { useQuery } from 'react-query';

interface Planet {
  name: string;
  url: string;
}

const getPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  const data = await res.json();

  return data.results;
};

const Films = () => {
  const { isLoading, data } = useQuery<Array<Planet>>('planets', getPlanets, { staleTime: Infinity });

  if (isLoading || !data) return <Loading />

  return (
    <div>
      <h1>Welcome to Planets!</h1>
      <DataList items={data.map(item => ({ title: item.name, url: item.url }))} />
    </div>
  );
}

export default Films
