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
        // background:theme.palette.secondary.light
    },
    aboutHeader:{
        marginBottom:pxToRem(30)
    },
    aboutImageWrapper:{
        // Margin not working but padding working
        paddingLeft:pxToRem(80)
    },
    aboutImage:{
        minWidth:pxToRem(500),
        minHeight:pxToRem(500),
    },
    cardItem:{
        margin:pxToRem(20),
        minHeight:pxToRem(500),
        maxHeight:pxToRem(600),
        transition:"0.8s",
        '&:hover':{
            transform: "scale(1.1)"
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
        "&:hover":{
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            border:`1px solid ${theme.palette.secondary.main}`,
        }
    },
    cardAction:{
        display:"flex",
        justifyContent:"flex-end"
    }
})

const Destination = (props)=>{
    const { classes } = props;
    useEffect(()=>{
        AOS.init({
            duration : 2000
          });
    })
    return(
        <Grid container id="destination">
            <Grid data-aos="zoom-in" data-aos-delay="100" item xs={12}>
                <Typography variant="display2" className={classes.aboutText} align="center">Most Popular Destinations</Typography>
            </Grid>
            <Grid data-aos="zoom-in" data-aos-delay="100" container item className={classes.aboutWrapper}> 
                <Grid item xs={3}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mumbai
                        </Typography>
                        <Typography component="p">
                            One of our best Hostels in the country! The facilities include swimming pool, gaming zone, clubs, bar and alot more to experience!
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                            <Button variant="contained" className={classes.explore}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Kolkata
                        </Typography>
                        <Typography component="p">
                        One of our best Hostels in the country! The facilities include swimming pool, gaming zone, clubs, bar and alot more to experience!
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                            <Button variant="contained" className={classes.explore}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid> 
                <Grid item xs={3}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Chennai
                        </Typography>
                        <Typography component="p">
                        One of our best Hostels in the country! The facilities include swimming pool, gaming zone, clubs, bar and alot more to experience!
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                            <Button variant="contained" className={classes.explore}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid> 
                <Grid item xs={3}>
                    <Card className={classes.cardItem}>
                        <CardMedia component="img" image={aboutResort}/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Delhi
                        </Typography>
                        <Typography component="p">
                        One of our best Hostels in the country! The facilities include swimming pool, gaming zone, clubs, bar and alot more to experience!
                        </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                            <Button variant="contained" className={classes.explore}>
                                BOOK NOW!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>     
            </Grid>
        </Grid>
    )
}
export default withStyles(styles,{withTheme:true})(Destination)