import React, { Component} from 'react';
import "./film.css"
import { Container, Row, Col } from 'react-bootstrap';

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
                <Container>
                    <Row>
                        <Col xs={6}>
                <img src={Poster} alt=""/>
                </Col >
                <Col xs={6}>
                <div className='film__info'>
                    <h3><a href={url}>{title}</a> </h3>
                    <h6>Rotten Tomato Score: {meterScore}</h6>
                    <h6>IMDB Score: {imdbScore}</h6>
                    <h6>Metascore: {Metascore}</h6>
                    <h6>Votes: {imdbVotes}</h6>
                    <h6>Awards: {Awards}</h6>
                    <h6>Country: {Country}</h6>
                    <h6>Language: {Language}</h6>
                    <p className='film__plot'>{plot}</p>
                </div>
                </Col>
                </Row> 
                </Container>
            </li>
        )
    }
}

export default Film;