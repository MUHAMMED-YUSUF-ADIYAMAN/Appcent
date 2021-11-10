import React, {useEffect, useState} from 'react';
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
                            props.movies.map((movie,i) => {
                                return(
                                    <Movie key={i} image={movie.poster_path} title={movie.original_title} vote={movie.vote_average} date={movie.release_date}/>
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
                            props.movies.map((movie,i) => {
                                return(
                                    <Movie key={i} image={movie.poster_path} title={movie.original_title} vote={movie.vote_average} date={movie.release_date}/>

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