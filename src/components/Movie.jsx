import React from 'react';

const Movie = (props) => {
    return (
        <div className="card">
            {
                props.image==null ? <img src="https://i.ytimg.com/vi/MPvdTBioBgg/maxresdefault.jpg" className="card-img-top" alt={props.title}/>:<img src={`http://image.tmdb.org/t/p/w185${props.image}`} className="card-img-top" alt={props.title}/>

            }
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.date}</p>
                <p>☆{props.vote}☆</p>
            </div>
        </div>
    );
};

export default Movie;