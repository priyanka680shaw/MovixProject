import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from '../../Components/Card/Card'
import { FetchApi } from '../../Components/Utils/FetchApi'
import { setTopRated } from '../../Slice/MovieSlice'
import { useDispatch } from 'react-redux'


//Main Function Home
export const Home = () => {
    
  
 //Creating instance of useDispatch
 const Dispatch = useDispatch();
   
 // Fetching Api 
    async function getApiData(){
      const recivedData = await FetchApi("https://api.themoviedb.org/3/movie/top_rated" , {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDUzMjIwMGJhYWM1MjVkMGE4N2E5MGFmNmE4YzJkOCIsInN1YiI6IjY2MGMyMWYxZDQwMGYzMDE2NDA1M2I2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.258V2tA3zPkhgt2xxL-LJILQVYf-2NB9NsRPAfmy43M'
        }
      }
      )
      console.log(recivedData.data.results)
      Dispatch(setTopRated(recivedData.data.results));
    }
    useEffect(()=>{
      getApiData();
     
    },[])

    //craeting Instance of useSelector
   const RecivedsetTopRatedData = useSelector((state)=> state.movieSlice.topRated)
   console.log("RecivedsetTopRatedData" , RecivedsetTopRatedData)

  return (
   <>
      {/* card container */}
      <section>
         
         
          
          
           <div style={{display : 'flex' , justifyContent : 'center' , alignContent : 'center'  , width: "100%", flexWrap : "wrap" , border : "2px"}}>
            {
              RecivedsetTopRatedData && RecivedsetTopRatedData.map((movie , index)=>{
                  return(
                    <NavLink to = {`/movie/${movie.id}`}>
                    <Card key = {movie.id}/>
                    </NavLink>
                  )
              })
            }
           </div>
         
         
      </section>
   </>
  )
}
export default Home;


