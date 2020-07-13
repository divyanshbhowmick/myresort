import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography, withStyles } from "@material-ui/core";
import { pxToRem } from "../../utils/theme";
const styles = ()=>({
    wrapper:{
        display:"flex",
        justifyContent:"center",
        margin:pxToRem(50)
    },
    loveIcon:{
        color:"red"
    }
})
const Footer = (props) =>{
    const {classes} = props;
    return(
        <div className={classes.wrapper}>
            <Typography variant="title" align="center">
                Made with <FavoriteIcon className={classes.loveIcon}/> by Divyansh!
            </Typography>
        </div>
    )
}

export default withStyles(styles,{withTheme:true})(Footer)