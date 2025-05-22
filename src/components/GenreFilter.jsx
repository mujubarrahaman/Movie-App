import React from "react"

const GenreFilter= ({genreList , setSelectedGenre}) => {
  

  return (
    <div >
        <select className='p-2 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded' onChange={(e)=> setSelectedGenre(e.target.value) }  >
        <option value="">All Genres</option>
          {genreList.map(genre => {
            return(
             
              <option key={genre} value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
    </div>
  )
}

export default GenreFilter