import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme, { pxToRem } from "../../utils/theme";
const styles = ()=>({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        alignItems:"center"
    },
    logo:{
        width:"70%"
    },
    title:{
        fontWeight:400,
        fontSize:pxToRem(30),
        color:"black"
    },
    logoTitle:{
        fontWeight:500
    },
    links:{
        display:"flex",
        justifyContent:"space-around",
        width:"100%",
        alignItems:"center"
    },
    link:{
        textDecoration:"none",
        "&::after":{
            content:"''",
            display:"block",
            width:0,
            height:pxToRem(4),
            background:theme.palette.secondary.main,
            transition:"width .3s"
        },
        "&:hover::after":{
            width:"100%",
            transition:"width .3s"
        }
    },
    loginTitle:{
        fontWeight:400,
        fontSize:pxToRem(30),
        color:theme.palette.secondary.main
    },
    login:{
        textDecoration:"none",
        padding:`${pxToRem(12)} ${pxToRem(20)}`,
        backgroundColor:theme.palette.secondary.light,
        borderRadius:pxToRem(30),
        "&:hover":{
            color:theme.palette.secondary.main,
            backgroundColor:theme.palette.primary.main,
            border:`1px solid ${theme.palette.secondary.main}`,
            padding:`${pxToRem(12)} ${pxToRem(18.8)}`,
        }
    }
}
)
const Navbar = (props)=>{
    const { classes } = props;
    return(
        <>
        <AppBar position="static" elevation={0}>
            <Toolbar>
            <div className={classes.container}>
                <div className={classes.logo}>
                <Typography variant="h4" className={classes.logoTitle}>
                    resortmate.
                </Typography>
                </div>
                <div className={classes.links}>
                <a href="/" className={classes.link}>
                    <Typography variant="title" className={classes.title}>
                    Home
                    </Typography>
                </a>
                <a href="#about" className={classes.link}>
                    <Typography variant="title" className={classes.title}>
                    About
                    </Typography>
                </a>
                <a href="#destination" className={classes.link}>
                    <Typography variant="title" className={classes.title}>
                    Destinations
                    </Typography>
                </a>
                <a href="#offer" className={classes.link}>
                    <Typography variant="title" className={classes.title}>
                    Offers
                    </Typography>
                </a> 
                <a href="#contact" className={classes.link}>
                    <Typography variant="title" className={classes.title}>
                    Contact
                    </Typography>
                </a> 
                <a href="/" className={classes.login}>
                    <Typography variant="title" className={classes.loginTitle}>
                    CHECK IN
                    </Typography>
                </a>    
                </div>
            </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default withStyles(styles,{withTheme:true})(Navbar)