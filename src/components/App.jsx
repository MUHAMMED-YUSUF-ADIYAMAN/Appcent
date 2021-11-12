import logo from '../logo.svg';
import '../App.css';
import React, {Component} from "react";
import Nav from "./Nav";
import Home from "./Home";

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      movies:[{
      }],
      a:1
    }
    this.apiKey="1335239b0b917f23ccc8492fb3fecd4f";//Normalde .env dosyasına konmalı
  }

  handleSubmit = () => {

    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&page=1`)
        .then(data =>data.json())
        .then(data=>{
           if (this.state.movies.length<15) {
               console.log(data);
               this.setState({movies:[...data.results],
                   a:this.state.a+1}
               );
           }
        })
      return(
          this.state.movies
      )
}

  render() {
    return(
        <div className="App">
          <Nav/>
          <Home movies={this.handleSubmit()}/>
        </div>
    )
  }

}

export default App;
