import { createContext, useState,useEffect } from "react"

export const WatchListContext = createContext()


export const WatchListProvider = ({children})=>{
    const [watchList,setWatchList] = useState([])
    const [genreList,setGenreList]= useState([])

    useEffect(()=> {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=1ea7045584098846a9983083fddcd6fb`
       
        fetch(url)
        .then((response) => response.json())
        .then((data)=> setGenreList(data.genres || []))
      }, [])
  
    const toggleWatchList =(movie) =>{
        const index = watchList.findIndex((m) => m.id === movie.id)
        if (index === -1){
            setWatchList([...watchList,movie])
        }else{
            setWatchList([...watchList.slice(0,index),...watchList.slice(index +1)])
        }
    }
    return(
        <WatchListContext.Provider value={{watchList,toggleWatchList,genreList}}>
            {children}
        </WatchListContext.Provider>
    )
}

