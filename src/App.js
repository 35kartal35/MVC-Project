
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPostController from './pages/AddPost/AddPostController';
import ListPostContainer from './pages/AddPost/ListPost/ListPostContainer';
import './style/style.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPostContainer />} />
        <Route path='/add-Post' element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
