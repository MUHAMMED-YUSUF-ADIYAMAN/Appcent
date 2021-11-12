import React from 'react';
import Movie from "./Movie";

const Home = (props) =>{


    return (
        <div className="row">
            <div className="row-col-12" >
                <div className="Jumbotron col col-8 offset-2">
                    <h1>MYA Movies</h1>
                ............................................ <br/>
                    ....................
                </div>
            </div>

            <div className="row-col-12" >
                <div className="col col-8 offset-2">
                    <h2>Popular Movies</h2>
                    <div className="row d-flex justify-content-evenly">
                        {
                            props.movies.slice(1,8).map((movie,i) => {
                                return(
                                    <Movie key={i} image={movie.known_for[0].poster_path} title={movie.known_for[0].original_title || movie.known_for[0].name} vote={movie.known_for[0].vote_average} date={movie.known_for[0].release_date}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="row-col-12" >
                <div className="col col-8 offset-2">
                    <h2>Popular Movies</h2>
                    <div className="row d-flex justify-content-evenly">
                        {
                            props.movies.slice(9,16).map((movie,i) => {
                                return(
                                    <Movie key={i} image={movie.known_for[0].poster_path} title={movie.known_for[0].original_title || movie.known_for[0].name} vote={movie.known_for[0].vote_average} date={movie.known_for[0].release_date || movie.known_for[0].first_air_date}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>

    );
}


export default Home;