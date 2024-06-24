// import utils
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

// import dei componenti
import DefaultLayout from "./pages/layoutPages/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from './pages/HomePage'
import ShowPostPage from "./pages/ShowPostPage"
import PostsListPage from './pages/PostsListPage'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>

            <Route index element={<HomePage />} />

            <Route path="posts">
              <Route index element={<PostsListPage />} />
              <Route path=":slug" element={<ShowPostPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
