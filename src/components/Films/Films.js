import React, { Component} from 'react';
import "./films.css"
import Film from '../Film/Film';
import filmlist from '../../data/imdb_films'

class Films extends Component {
    render(){
        // console.log(filmlist[0])
        const filteredList = filmlist.filter( film => (film.Response === "True"));
        return(
            <ul>
                {filteredList
                .map( (film, index) => (

                    <Film 
                    key={index}
                    title={film.Title}
                    critic_consensus={film.critic_consensus}
                    plot={film.Plot}
                    imdbScore={film.Ratings && film.Ratings[0] && film.Ratings[0].Value}
                    meterScore={film.Ratings && film.Ratings[1] && film.Ratings[1].Value}
                    Metascore={film.Ratings && film.Ratings[2] && film.Ratings[2].Value}
                    imdbVotes={film.imdbVotes}
                    url={film.url}
                    Poster={film.Poster}
                    Awards={film.Awards}
                    Country={film.Country}
                    Language={film.Language}
                    />
                ))}
            </ul>
        )
    }
}

export default Films;

// Ratings: Array(3)
// 0:
// Source: "Internet Movie Database"
// Value: "7.3/10"
// __proto__: Object
// 1:
// Source: "Rotten Tomatoes"
// Value: "97%"
// __proto__: Object
// 2:
// Source: "Metacritic"
// Value: "89/100"


// Actors: "Marion Cotillard, Fabrizio Rongione, Catherine Salée, Baptiste Sornin"
// Awards: "Nominated for 1 Oscar. Another 40 wins & 73 nominations."
// BoxOffice: "N/A"
// Country: "Belgium, France, Italy"
// DVD: "25 Aug 2015"
// Director: "Jean-Pierre Dardenne, Luc Dardenne"
// Genre: "Drama"
// Language: "French, Arabic, English"
// Metascore: "89"
// Plot: "Liège, Belgium. Sandra is a factory worker who discovers that her workmates have opted for a EUR1,000 bonus in exchange for her dismissal. She has only a weekend to convince her colleagues to give up their bonuses in order to keep her job."
// Poster: "https://m.media-amazon.com/images/M/MV5BMjIyMzczMDI0NF5BMl5BanBnXkFtZTgwNjI5Nzk3MTE@._V1_SX300.jpg"
// Production: "IFC Films"
// Rated: "PG-13"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "21 May 2014"
// Response: "True"
// Runtime: "95 min"
// Title: "Two Days, One Night"
// Type: "movie"
// Website: "http://www.ifcfilms.com/films/two-days-one-night"
// Writer: "Jean-Pierre Dardenne, Luc Dardenne"
// Year: "2014"
// imdbID: "tt2737050"
// imdbRating: "7.3"
// imdbVotes: "40,667"
// __proto__: Object