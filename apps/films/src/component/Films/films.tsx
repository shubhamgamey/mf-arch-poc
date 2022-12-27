import { DataList, Loading } from '@ui';
import React from 'react'
import { useQuery } from 'react-query';

interface Film {
  title: string;
  url: string;
}

const getFilms = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();

  return data.results;
};

const Films = () => {
  const { isLoading, data } = useQuery<Array<Film>>('films', getFilms, { staleTime: Infinity });

  if (isLoading || !data) return <Loading />

  return (
    <div>
      <h1>Welcome to Films!</h1>
      <DataList items={data.map(item => ({ title: item.title, url: item.url }))} />
    </div>
  );
}

export default Films
