import React,{Component} from "react";
import Header from "../components/Layout/Header"
import About from "../components/About"
import Destination from "../components/Destination"
import Offer from "../components/Offer"
import Contact from "../components/Contact"
import { Grid } from "@material-ui/core";

class Home extends Component{
  render(){
    return(
      <Grid container>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={12}>
            <About/>
          </Grid>
          <Grid item xs={12}>
            <Destination/>
          </Grid>
          <Grid item xs={12}>
            <Offer/>
          </Grid>
          <Grid item xs={12}>
            <Contact/>
          </Grid>
      </Grid>
    )
  }
}

export default Home