import React,{useEffect} from "react"
import contactImg from "../assets/contact.png"
import { withStyles, Grid, Card, CardContent, Typography, Button } from "@material-ui/core"
import theme, { pxToRem, pxToVh, pxToVw } from "../utils/theme"
import AOS from "aos"
const styles = ()=>({
    contactUsImg:{
        marginLeft:pxToRem(110),
        maxHeight:pxToVh(700),
        maxWidth:pxToVw(700)
    },
    headingText:{
        color:theme.palette.secondary.main
    },
    contactUsCard:{
        marginTop:pxToRem(110),
        marginLeft:pxToRem(170),
        maxWidth:pxToRem(600),
        borderRadius:pxToRem(50),
        boxShadow:`1px 2px 10px -2px ${theme.palette.secondary.light}`
    },
    cardHeadingText:{
          marginBottom:pxToRem(40),
          color:theme.palette.secondary.main
    },
    contactUsContent:{
        padding:`${pxToRem(40)} ${pxToRem(50)}`
    },
    contactUsForm:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        minHeight: pxToRem(500)
    },
    inputElem:{
        padding:`${pxToRem(5)} ${pxToRem(0)}`,
        fontFamily:theme.typography.fontFamily,
        borderTopStyle:"hidden",
        borderRightStyle:"hidden",
        borderLeftStyle:"hidden",
        borderBottom:`${pxToRem(1.5)} solid black`,
        fontSize:pxToRem(25),
        outline:"none",
        "&:active,&:focus":{
            borderBottom:`${pxToRem(2)} solid ${theme.palette.secondary.light}`
        }
    },
    explore:{    
        marginTop:pxToRem(50),
        minwidth:pxToRem(350),
        padding:`${pxToRem(20)} ${pxToRem(35)}`,
        color:theme.palette.secondary.main,
        fontSize:pxToRem(25),
        borderRadius:pxToRem(35),
        backgroundColor:theme.palette.primary.main,
        border:`1.1px solid ${theme.palette.secondary.main}`,
        "&:hover":{
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            border:`1.1px solid ${theme.palette.secondary.main}`,
        }
    },
})
const Contact = (props)=>{
    const {classes} = props
    useEffect(()=>{
        AOS.init({
            duration:2000
        })
    })
    return(
        <Grid container id="contact">
            <Grid item xs={12}>
                <Typography variant="display2" align="center" className={classes.headingText}>
                    Got Questions?
                </Typography>
            </Grid>
            <Grid container item xs={12}>
                <Grid data-aos="fade-right" item xs={6}>
                    <img alt="ContactUS" src={contactImg} className={classes.contactUsImg}/>
                </Grid>
                <Grid item xs={6} data-aos="fade-left">
                    <Card className = {classes.contactUsCard} elevation={2}>
                        <CardContent className = {classes.contactUsContent}>
                            <Typography variant="headline" className={classes.cardHeadingText}>Hey, Write Us!</Typography>
                            <form className={classes.contactUsForm}> 
                                <input id="Name" type="text" placeholder="Name" className={classes.inputElem}/>
                                <input id="Email" type="email" placeholder="Email" className={classes.inputElem}/>
                                <input id="Phone" type="tel" placeholder="Phone" className={classes.inputElem}/>
                                <textarea placeholder="Message" className={classes.inputElem}></textarea>
                                <Button type="submit" variant="contained" className={classes.explore}>
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles,{withTheme:true})(Contact)