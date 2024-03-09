import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import AboutUs from './components/about-us'
import NotFound from './components/not-found'
import './main.scss'
import PostIdPage from './components/post-page/post-page'

const Main = () => {
  return (
    <main className="main" id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
