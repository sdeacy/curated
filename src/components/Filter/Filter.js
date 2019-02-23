import React, { Component } from 'react'
import Select from 'react-select';
import filmlist from '../../data/imdb_films'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  class Filter extends Component {

  
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
      // console.log(filmlist[0])
      const filteredList = filmlist.filter( film => (film.Response === "True"));
      const genresFromFilms = filmlist.map(film => (film.Genre))
      // console.log(genresFromFilms);
      
      let genres = []
      for(let i=1; i< genresFromFilms.length ; i++){
          // console.log(genresFromFilms[i] && genresFromFilms[i].split(','))
          let arr = genresFromFilms[i] && genresFromFilms[i].split(',');
          // console.log("arr", arr)
          if(arr){
              for(let f=1; f< arr.length ; f++){
                  // console.log(arr[f])
                  genres.push(arr[f])
                  
              }
          }
      }
      function onlyUnique(value, index, self) { 
          return self.indexOf(value) === index;
      }
      console.log(genres.filter( onlyUnique ))

      const unique_genres = genres.filter( onlyUnique );
      
      // console.log(genres)
      // console.log(filteredList)
      const options = unique_genres.map( genre => ( { value: genre, label: genre }));
      console.log(options);
      
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Filter;