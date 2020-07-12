import React from "react"
import { Modal, withStyles, Button } from "@material-ui/core";
import Frame from "../assets/room.glb"
// import "../assets/bedroom/scene.bin"
import CloseIcon from '@material-ui/icons/Close';
import { pxToRem } from "../utils/theme";

const styles = (theme)=>({
    modelWrapper:{
        height:"100%",
        width:"100%",
        backdropFilter:"blur(10px)",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end"
    },
    model:{
        
    },
    icon:{
        color:theme.palette.primary.main,
        height:pxToRem(50),
        width:pxToRem(50),
    }
})

const ModalViewer = (props)=>{
    const {classes,setModalState} = props;
    const handleClick=()=>{
        setModalState();
    }
    return(
        <div>
            <Modal open={props.isOpen}>
                <div className={classes.modelWrapper}>
                <Button variant="text" onClick={handleClick}>
                    <CloseIcon className={classes.icon}/>
                </Button>
                <model-viewer className={classes.model} style={{width:"100%",height:"100%"}}
                    id="reveal" loading="eager"
                   camera-controls camera-orbit="0deg 90deg 3m" camera-target="-1m 1m -1m"
                   min-field-of-view="60deg"
                    src={Frame} 
                    alt="Photo Frame"
                    ar
                    autoplay
                    shadow-intensity="1">
                </model-viewer> 
                </div>
            </Modal>
        </div>
    )
}

export default withStyles(styles,{withTheme:true})(ModalViewer) 