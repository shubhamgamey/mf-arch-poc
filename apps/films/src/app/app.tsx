import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Film from '../component/Film';
import Films from '../component/Films';

export function App(props: { queryClient: QueryClient }) {

  return (
    <QueryClientProvider client={props.queryClient}>
      <Routes>
        <Route index element={<Films />} />
        <Route path="/:id" element={<Film />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
