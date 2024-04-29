import {useState,useEffect} from 'react' 
import axios from 'axios'
import api from '../API\'s/api'
 
const Base_url='https://api.themoviedb.org/3'
const Base_ImgUrl='https://image.tmdb.org/t/p/original/'


const Banner = () => {
  const[movies,setMovies]=useState([])
 
  useEffect(()=>{
    //fetching the movie data
    const Fetchdata= async()=>{
      try {
        const response = await axios.get(`${Base_url}${api.fetchTopratedmovies}`);
        console.log(response);
        setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
      } catch (error) {
        console.error(error);
      }
    }
    Fetchdata();
    return ()=>{}
  },[])

  let trimString = function (string, len) {
    return string?.length > len ? 
           string.substring(0, len) + '...' :
           string;
  };
 
  return (
    
    <section className='container-fluid' id='info-container'>
      
          
          <img
            src={`${Base_ImgUrl}${movies?.backdrop_path}`}
            alt="img"
           className='banner'
          />
          <div className="info">
            <h3 className='text-white fw-bold'>{movies?.title || movies?.original_title}</h3>
            <p className='text-white'>{trimString(movies?.overview,100)}</p>
            <div class="d-grid  d-md-block" id='btn'>
            <button className="btn btn-light mx-1" type="button">
          <i className="bi bi-play-fill bg-transparent"></i> Play
          </button>
          <button className="btn btn-light mx-1 bg-transparent text-white" type="button">
          <i className="bi bi-info-circle bg-transparent"></i> More info
          </button>
</div>
          </div>

    </section>
  )
}

export default Banner