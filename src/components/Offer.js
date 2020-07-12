import React,{useEffect, useState} from "react"
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
        // background:theme.palette.secondary.light,
        minHeight:pxToRem(600)
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
    wrapper:{
        marginTop:pxToRem(100)
    },
    cardWrapper:{
       maxHeight:"fill-available"
    },
    flipCard:{
        animation:`flipCard 1s forwards`
    },
    flipCardBack:{
        animation:`flipCardBack 1s forwards`
    },
    cardItem:{
        margin:pxToRem(20),
        maxHeight:pxToRem(550),
        maxWidth:pxToRem(420),
        borderRadius:`${pxToRem(50)} ${pxToRem(5)}`,
        // transition:"2s",
        // '&:hover':{
            // animation:`flipCard 1s forwards`
            // animation: "4s fadeAnimation",
        // }
    },
    cardItemBack:{
        margin:pxToRem(20),
        minHeight:pxToRem(550),
        maxWidth:pxToRem(420),
        borderRadius:`${pxToRem(50)} ${pxToRem(5)}`,
        transform:"translateY(-400px) rotateY(90deg)",
        // transition:"2s",
        // '&:hover':{
            // animation:`flipCardBack 1s forwards`
            // animation: "4s fadeAnimation",
        // }
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
        "&:hover":{
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            border:`1px solid ${theme.palette.secondary.main}`,
        }
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
})

const Offer = (props)=>{
    const { classes } = props;
    const [getCard, setCard] = useState(0)
    useEffect(()=>{
        AOS.init({
            duration : 2000
          });
    })
    return(
        <Grid container id="offer" className={classes.wrapper}>
            <Grid data-aos="zoom-in" item xs={12}>
                <Typography variant="display2" className={classes.aboutText} align="center">Trending Offers</Typography>
            </Grid>
            <Grid data-aos="zoom-in" container item className={classes.aboutWrapper}> 
                <Grid item xs={3} className={classes.cardWrapper} onMouseEnter={()=>setCard(1)} onMouseLeave={()=>setCard(0)}>
                    <Card className={getCard===1?`${classes.cardItem} ${classes.flipCard}`:`${classes.cardItem}`}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mumbai
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={getCard===1?`${classes.cardItemBack} ${classes.flipCardBack}`:`${classes.cardItemBack}`}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h3">
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
                <Grid item xs={3} className={classes.cardWrapper} onMouseEnter={()=>setCard(2)} onMouseLeave={()=>setCard(0)}>
                    <Card className={getCard===2?`${classes.cardItem} ${classes.flipCard}`:`${classes.cardItem}`}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mumbai
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={getCard===2?`${classes.cardItemBack} ${classes.flipCardBack}`:`${classes.cardItemBack}`}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h3">
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
                <Grid item xs={3} className={classes.cardWrapper} onMouseEnter={()=>setCard(3)} onMouseLeave={()=>setCard(0)}>
                    <Card className={getCard===3?`${classes.cardItem} ${classes.flipCard}`:`${classes.cardItem}`}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mumbai
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={getCard===3?`${classes.cardItemBack} ${classes.flipCardBack}`:`${classes.cardItemBack}`}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h3">
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
                <Grid item xs={3} className={classes.cardWrapper} onMouseEnter={()=>setCard(4)} onMouseLeave={()=>setCard(0)}>
                    <Card className={getCard===4?`${classes.cardItem} ${classes.flipCard}`:`${classes.cardItem}`}>
                        <CardMedia component="img" image={aboutResort} className={classes.aboutImage}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mumbai
                        </Typography>
                        </CardContent>                        
                    </Card>
                    <Card className={getCard===4?`${classes.cardItemBack} ${classes.flipCardBack}`:`${classes.cardItemBack}`}>
                        <CardContent>
                            <br/>
                            <br/>
                            <br/>
                        <Typography gutterBottom variant="h3">
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