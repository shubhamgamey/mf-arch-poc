import { Route, Routes } from 'react-router-dom';
import Film from '../component/Film';
import Films from '../component/Films';

export function App() {
  return (
      <Routes>
        <Route index element={<Films />} />
        <Route path="/:id" element={<Film />} />
      </Routes>
  );
}

export default App;
