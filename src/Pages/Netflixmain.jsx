import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import Home from './home'
import Tvshows from './tvshows'
import Movies from './movies'
import News from './news'
import List from './list'
import api from '../API\'s/api'


import { BrowserRouter,Routes,Route } from 'react-router-dom'
const NetflixMain = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' />
        <Route path='/Tvshows' />
        <Route path='/Movies' />
        <Route path='/News' />
        <Route path='/List' />

      </Routes>
      </BrowserRouter>
      {/* <img src="/src/assets/banner.jpg" alt="" style={{width:'215vh',height:'750px'}} /> */}
      <Banner />

      <Row title='Top Trending Movies' fetchUrl={api.fetchTrending}/>
      <Row title='Top Rated Movies' fetchUrl={api.fetchTopratedmovies}/>
      <Row title='Netflix Originals' fetchUrl={api.fetchNetflixoriginals}/>
      <Row title='Comedy Movies' fetchUrl={api.fetchComedymovies}/>
      <Row title='Romantic Movies' fetchUrl={api.fetchRomanticmovies}/>
      <Row title='Action Movies' fetchUrl={api.fetchActionmovies}/>
      <Row title='Horror Movies' fetchUrl={api.fetchHorrormovies}/>
      <Row title='Documentary Movies' fetchUrl={api.fetchDocumentaries}/>

    </div>
  )
}

export default NetflixMain
