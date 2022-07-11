import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component {
  
  state={
    giphy :[],
    gifimg:''
  }
  componentDidMount(){
    console.log('Hello from Component did mount')
   fetch(' https://api.giphy.com/v1/gifs/trending?api_key=VMelPU46dFBVBQDlWKC9rl6XB1k3FvzJ&limit=25&rating=g')
   .then(response =>response.json())
 
   .then(json => {
    // console.log(json)
    this.setState({giphy :json.data}
    )
     } )

   }


  render(){
   
    return (
   
    <div className="App">
      <h1> Giphy </h1>
      <button onClick = {this.handleClick}> Make API Call</button>
    
     
       {/* {this.state.giphy.map(data => <p> <img src ={data.images.original.url}/> </p>)}  */}
     {
      this.state.giphy.map(g=>(
        <div key ={g.id}>
          <img src={g.images.original.url} alt ={g.title} />
          <h3> {g.title}</h3>
        </div>
      ))

     }
    </div>
  );
  }
}

export default App;
