import logo from '../logo.svg';
import '../App.css';
import React, {Component} from "react";
import Nav from "./Nav";
import Home from "./Home";

class App extends Component{
  constructor() {
    super();
    this.state={
      movies:[{
          key:"{i}" ,
          image:"{movie.poster_path}",
          title:"{movie.original_title}",
          vote:"{movie.vote_average}" ,
          date:"{movie.release_date}"
      }],
      a:1
    }
    this.apiKey="1335239b0b917f23ccc8492fb3fecd4f";//Normalde .env dosyasına konmalı
  }
  handleSubmit = (e) => {

    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&page=1`)
        .then(data =>data.json())
        .then(data=>{
          console.log(data);
          this.setState({movies:[...data.results],
              a:this.state.a+1}
          );
        })

}

  render() {
    return(
        <div className="App">
          <Nav/>
          <Home handleSubmit={this.handleSubmit()}/>
        </div>
    )
  }

}

export default App;
