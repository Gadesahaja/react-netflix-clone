import {useState,useEffect} from 'react'
import axios from 'axios'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// Base urls
const Base_Url='https://api.themoviedb.org/3' 
const Base_ImgUrl='https://image.tmdb.org/t/p/original/'

const Row = ({title,fetchUrl}) => {
  const[movies,setMovies]=useState([])
  const[isScroll,setIsScroll]=useState(0)
  useEffect(()=>{

    // fetching the movie data
    const Fetchdata=async()=>{
      try {
        const response = await axios.get(`${Base_Url}${fetchUrl}`);
        console.log(response);
        setMovies(response.data.results)
      } catch (error) {
        console.error(error);
      }
    }

    // calling the fetch data function
    Fetchdata()

    return()=>{}
  },[fetchUrl])

  const handlescrollright=()=>{
    setIsScroll(previousState=>previousState+150)
  }
  const handlescrollleft=()=>{
    setIsScroll(previousState=>previousState-150)
  }
  return (
    <div className='container-fluid'>
      <h1 className='fw-bold text-white fs-6'>{title}</h1>
      <div className="row align-items-center">
        <div className="col-auto">
          <button className='transparent'>
            <ArrowBackIosIcon className='arrowleft'onClick={handlescrollleft}/>
          </button>
        </div>
        <div className="col" style={{overflow:'hidden'}}>
          <div className='d-flex' style={{transform:`translateX(-${isScroll}px)`,transition:'transform 0.5s linear'}}>
            {movies && movies.map((items,index)=>{
              return(
                <img key={index}src={`${Base_ImgUrl}${items.poster_path}`} alt="" style={{width:'150px'}}
                className='img mx-1' />
              )
            })}
          </div>
        </div>
        <div className="col-auto">
        <button className='transparent'>
          <ArrowForwardIosIcon className='arrowright'onClick={handlescrollright}/></button>
        </div>
      </div>
      
    </div>
  )
}

export default Row
