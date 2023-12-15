import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Details from './pages/Details';
import EditPost from './pages/UpdatePost';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/add' element={<CreatePost />} />
          <Route path='/posts/edit/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
