import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Planet from '../component/Planet';
import Planets from '../component/Planets';

export function App(props: { queryClient: QueryClient }) {

  return (
    <QueryClientProvider client={props.queryClient}>
      <Routes>
        <Route index element={<Planets />} />
        <Route path="/:id" element={<Planet />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
