import React from "react"
import { Grid, withStyles, Typography, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import heroImage from "../../assets/background.svg"
import { pxToRem} from "../../utils/theme";
import Typical from "react-typical"
const styles= (theme)=>({
    hero:{
        maxWidth:"100vw",
    },
    heroImage:{
        marginTop:pxToRem(100),
        maxWidth:pxToRem(810),
        height:pxToRem(700),
        transform:"scale(1.3)",
    },
    typo:{
        display:"flex",
        flexDirection:"column",
        marginTop:pxToRem(180),
        marginLeft:pxToRem(80)
    },
    explore:{
        marginTop:pxToRem(100),
        width:pxToRem(250),
        padding:`${pxToRem(20)} ${pxToRem(15)}`,
        color:theme.palette.primary.main,
        fontSize:pxToRem(25),
        borderRadius:pxToRem(35),
        background:theme.palette.secondary.main,
        "&:hover":{
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            border:`1px solid ${theme.palette.secondary.main}`,
        }
    },
    typewritterText:{
        color:theme.palette.secondary.main
    }
})

const Header = (props)=>{
    const { classes } = props;
    return(
        <>
            <Navbar/>
            <Grid container className={classes.hero}>
                <Grid item xs={7}>
                   <div className={classes.typo}>
                        <Typography variant="h2">
                            A place where you can find{' '}
                            <span className={classes.typewritterText}>"
                            <Typical
                                loop={Infinity}
                                wrapper="span"
                                steps={['best resorts in the town!',1000,'best service in town!',1000,'best ambience in town!',1000]}
                            />"
                            </span>
                        </Typography>
                        <Button variant="contained" className={classes.explore}>
                            Learn More
                        </Button>
                        {/* <PlayCircleOutlineIcon /> */}
                    </div> 
                </Grid>
                <Grid item xs={5}>
                    <img alt="hero" src={heroImage} className={classes.heroImage}/>
                </Grid>
            </Grid>
        </>
        
    )
}
export default withStyles(styles,{withTheme:true})(Header)