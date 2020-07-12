import React,{useEffect,useState} from "react"
import { Grid, withStyles, Typography, Button } from "@material-ui/core";
import { pxToRem } from "../utils/theme";
import aboutResort from "../assets/aboutResort.jpg"
import aboutResort1 from "../assets/aboutResort1.jpg"
import aboutResort2 from "../assets/aboutResort2.jpg"
import ModalViewer from "./ModalViewer"
import AOS from "aos"
import 'aos/dist/aos.css';
const styles= (theme)=>({
    wrapper:{
        marginTop:pxToRem(300)
    },
    aboutText:{
        color:theme.palette.secondary.main,
        margin:""
    },
    aboutWrapper:{
        margin:`${pxToRem(100)} ${pxToRem(100)} ${pxToRem(200)} ${pxToRem(100)}`,
        // background:theme.palette.secondary.light
    },
    aboutHeader:{
        marginBottom:pxToRem(30)
    },
    aboutImageWrapper:{
        // Margin not working but padding working
        paddingTop:pxToRem(50),
        paddingLeft:pxToRem(80),
        maxHeight:"fill-available"        
    },
    aboutImage:{
        position:"relative",
        maxWidth:pxToRem(500),
        maxHeight:pxToRem(500),
        marginLeft:pxToRem(100),
        display:"inline-block",
        // zIndex:"10",
        '&:hover':{
            transform: `scale(1.2)`,
            zIndex:"20 !important"
        }
    },
    aboutImage1:{
        position:"relative",
        maxWidth:pxToRem(500),
        maxHeight:pxToRem(500),
        marginLeft:pxToRem(100),
        display:"inline-block",
        // zIndex:"10",
        transform:`translate(${pxToRem(360)},${pxToRem(-250)})`,
        '&:hover':{
            transform: `scale(1.2) translate(${pxToRem(360)},${pxToRem(-200)})`,
            zIndex:"20 !important"
        }
    },
    aboutImage2:{
        position:"relative",
        maxWidth:pxToRem(500),
        maxHeight:pxToRem(500),
        marginLeft:pxToRem(100),
        display:"inline-block",
        // zIndex:"10",
        transform:`translate(${pxToRem(150)},${pxToRem(-400)})`,
        '&:hover':{
            transform: `scale(1.2) translate(${pxToRem(100)},${pxToRem(-300)})`,
            zIndex:"20 !important"
        }
    },
    learnMoreButton:{
        marginTop:pxToRem(50),
        width:pxToRem(250),
        padding:`${pxToRem(20)} ${pxToRem(15)}`,
        color:theme.palette.secondary.main,
        display:"block",
        fontSize:pxToRem(25),
        "&::after":{
            content:"''",
            display:"block",
            width:0,
            height:pxToRem(2),
            background:theme.palette.secondary.main,
            transition:"width .3s"
        },
        "&:hover::after":{
            width:"100%",
            transition:"width .3s"
        }
    },
})

const About = (props)=>{
    const { classes } = props;
    useEffect(()=>{
        AOS.init({
            duration:2000
        })
    })
    const [isModalOpen, setModalState] = useState(false);
    const handleClick=()=>{
        setModalState(state=>!state)
    }
    return(
        <Grid container id="about" className={classes.wrapper}>
            <Grid data-aos="fade-up" data-aos-delay="100" item xs={12}>
                <Typography variant="display2" className={classes.aboutText} align="center">About</Typography>
            </Grid>
            <Grid data-aos="fade-up" data-aos-delay="100" container item className={classes.aboutWrapper}> 
                <ModalViewer isOpen={isModalOpen} setModalState={handleClick}/>
                <Grid item xs={5} >
                    <Typography variant="display1" className={classes.aboutHeader}>
                    LET YOURSELF BE ENCHANTED
                    </Typography>
                    <Typography variant="title">
                    The history of Badrutt's Palace Hotel fascinates everyone. Tradition and innovation melt into a stunning backdrop. It is the magic of this hotel that keeps guests coming back again and again. That indescribable feeling when you step into the Grand Hall. Be enchanted, far away from everyday life.
                    The history of Badrutt's Palace Hotel fascinates everyone. Tradition and innovation melt into a stunning backdrop. It is the magic of this hotel that keeps guests coming back again and again. That indescribable feeling when you step into the Grand Hall. Be enchanted, far away from everyday life.
                    </Typography>
                    <Button variant="text" className={classes.learnMoreButton}>
                        Learn More &rarr;
                    </Button>
                </Grid>
                <Grid item xs={7} className={classes.aboutImageWrapper}>
                    <img src={aboutResort} onClick={handleClick} alt="Resort" className={classes.aboutImage}/>
                    <img src={aboutResort1} onClick={handleClick} alt="Resort" className={classes.aboutImage1}/>
                    <img src={aboutResort2} onClick={handleClick} alt="Resort" className={classes.aboutImage2}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default withStyles(styles,{withTheme:true})(About)