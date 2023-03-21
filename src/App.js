
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPostController from './pages/AddPost/AddPostController';
import ListPostController from './ListPost/ListPostController';
import './style/style.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPostController />} />
        <Route path='/add-Post' element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
