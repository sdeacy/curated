import React, { Component} from 'react';
import "./film.css"

class Film extends Component {
    render(){
        const {title,meterScore, plot, critic_consensus,url, Poster, Awards,Votes,
        Country,
    Language,
imdbVotes,
imdbScore, Metascore
} = this.props;
        // console.log(title)
        return(
            <li>
                <img src={Poster} alt=""/>
                <div className='film__info'>
                    <h3><a href={url}>{title}</a> </h3>
                    <h4>Rotten Tomato Score: {meterScore}</h4>
                    <h4>IMDB Score: {imdbScore}</h4>
                    <h4>Metascore: {Metascore}</h4>
                    <h4>Votes: {imdbVotes}</h4>
                    <h4>Awards: {Awards}</h4>
                    <h4>Country: {Country}</h4>
                    <h4>Language: {Language}</h4>
                    <p className='film__plot'>{plot}</p>
                </div>
            </li>
        )
    }
}

export default Film;