import React,{Component} from "react";
import Home from "./views/Home"

class App extends Component{
  render(){
    return(
      <div style={{overflow:"hidden"}}>
        <Home/>
      </div>
    )
  }
}

export default App