function getMoviesFreshness(movies) {
  return movies.map(movie=>{if(movie.rating<60){
      return movie.name + movie.rating+ movies.label = 'rotten'
  }else if(movie.rating>75){
        return movie.name + movie.rating+ movies.label = 'certified fresh'
  }else{
    return movie.name + movie.rating+ movies.label = 'fresh'
  }})
}



// DON'T TOUCH THIS!
module.exports = getMoviesFreshness;