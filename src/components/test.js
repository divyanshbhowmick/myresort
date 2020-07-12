import React,{useEffect} from "react"
import { Grid, withStyles, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import { pxToRem } from "../utils/theme";
import aboutResort from "../assets/aboutResort.jpg"
import AOS from "aos"
import 'aos/dist/aos.css';
const styles= (theme)=>({
    aboutText:{
        color:theme.palette.secondary.main,
        margin:""
    },
    aboutWrapper:{
        margin:`${pxToRem(100)} ${pxToRem(100)}`,
        background:theme.palette.secondary.light,
    },
    aboutHeader:{
        marginBottom:pxToRem(30)
    },
    aboutImageWrapper:{
        // Margin not working but padding working
        paddingLeft:pxToRem(80)
    },
    aboutImage:{
        minHeight:pxToRem(424)
    },
    cardWrapper:{
       maxHeight:"fill-available"
    },
    cardItem:{
        margin:pxToRem(20),
        maxHeight:pxToRem(550),
        maxWidth:pxToRem(420),
        borderRadius:`${pxToRem(50)} ${pxToRem(5)}`,
        // transition:"2s",
        '&:hover':{
            animation:`flipCard 1s forwards`
            // animation: "4s fadeAnimation",
        }
    },
    cardItemBack:{
        margin:pxToRem(20),
        minHeight:pxToRem(550),
        maxWidth:pxToRem(420),
        borderRadius:`${pxToRem(50)} ${pxToRem(5)}`,
        transform:"translateY(-400px) rotateY(90deg)",
        // transition:"2s",
        '&:hover':{
            animation:`flipCardBack 1s forwards`
            // animation: "4s fadeAnimation",
        }
    },
    explore:{
        marginTop:pxToRem(10),
        width:pxToRem(150),
        padding:`${pxToRem(15)} ${pxToRem(15)}`,
        color:theme.palette.primary.main,
        fontSize:pxToRem(18),
        borderRadius:pxToRem(35),
        background:theme.palette.secondary.main,
    },
    exploreBack:{
        marginTop:pxToRem(40),
        width:pxToRem(250),
        padding:`${pxToRem(25)} ${pxToRem(15)}`,
        color:theme.palette.primary.main,
        fontSize:pxToRem(25),
        borderRadius:pxToRem(40),
        background:theme.palette.secondary.main,
    },
    cardAction:{
        display:"flex",
        justifyContent:"flex-end"
    },
    cardActionBack:{
        display:"flex",
        justifyContent:"center"
    },
    "@keyframes flipCard":{
        from:{transform:"rotateY(0deg)"},
        to:{transform:"rotateY(90deg)"},    
    },
    "@keyframes flipCardBack":{
        from:{transform:"translateY(-400px) rotateY(90deg)"},
        to:{transform:"translateY(-400px) rotateY(0deg)"},    
    },
    "@keyframes fadeAnimation": {
        from: {opacity: 0},
        to: {opacity: 1},
      },
})

const Offer = (props)=>{
    const { classes } = props;
    useEffect(()=>{
        AOS.init({
            duration : 2000
          });
    })
    return(
        <Grid  data-aos="zoom-in" container id="offer">
            <Grid item xs={12}>
                <Typography variant="display2" className={classes.aboutText} align="center">Trending Offers</Typography>
            </Grid>
            <Grid container className={classes.aboutWrapper}> 
                <Grid item xs={3} className={classes.cardWrapper}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mumbai
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={classes.cardItemBack}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h2">
                            $250/Day
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActionBack}>
                            <Button variant="contained" className={classes.exploreBack}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} className={classes.cardWrapper}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Kolkata
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={classes.cardItemBack}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h2">
                            $250/Day
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActionBack}>
                            <Button variant="contained" className={classes.exploreBack}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} className={classes.cardWrapper}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Delhi
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={classes.cardItemBack}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h2">
                            $250/Day
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActionBack}>
                            <Button variant="contained" className={classes.exploreBack}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} className={classes.cardWrapper}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Bengaluru
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={classes.cardItemBack}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h2">
                            $250/Day
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActionBack}>
                            <Button variant="contained" className={classes.exploreBack}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>     
            </Grid>
        </Grid>
    )
}
export default withStyles(styles,{withTheme:true})(Offer)