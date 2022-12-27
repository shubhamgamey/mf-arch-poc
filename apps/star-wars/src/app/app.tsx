import * as React from 'react';
import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Header, Nav } from '@ui';
import Home from '../components/Home';
import { QueryClient } from 'react-query';

const Films = React.lazy(() => import('films/Module'));

const Planets = React.lazy(() => import('planets/Module'));

const Starships = React.lazy(() => import('starships/Module'));

const listItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Films',
    url: '/films',
  },
  {
    title: 'Planets',
    url: '/planets',
  },
  {
    title: 'Starships',
    url: '/starships',
  },
];
const queryClient = new QueryClient();

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Header />
      <div className={styles.container}>
        <Nav listItems={listItems} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/films/*"
              element={<Films queryClient={queryClient} />}
            />
            <Route
              path="/planets/*"
              element={<Planets queryClient={queryClient} />}
            />

            <Route path="/starships" element={<Starships />} />
          </Routes>
        </main>
      </div>
    </React.Suspense>
  );
}

export default App;
