import { Error, Home, Posts, PostSingle, Profile, User } from './pages'; 
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components'

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/user/:userId' element={<User/>}/>
          <Route path='/posts/:postId' element={<PostSingle/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
