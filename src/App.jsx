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

            <Route path="posts" element={<PostsListPage />}>
              <Route path=":id" element={<ShowPostPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />

          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <main className='container'>
        <Form setError={(error) => setError(error)} fetchPosts={() => fetchPosts()}></Form>
        <PostsList setError={(error) => setError(error)} posts={posts} images={images} />
      </main>
      <Footer />
      <Alert error={error}></Alert> */}

    </>
  )
}

export default App
