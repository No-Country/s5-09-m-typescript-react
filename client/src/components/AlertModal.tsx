import { Grid, Modal, Paper, Typography } from "@mui/material";
import { useState } from "react";

interface AlertModal {
	urlImg: string;
    title: string;
    text: string;
}

export default function AlertModal({
    urlImg,
	title,
    text,	
}: AlertModal){

    return(
      
       <Grid sx={{
                position:'absolute',
                top:200,
                left: 650,

       }}>
            <Paper
                sx={{
                    width:'400px',
                    height:'200px',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    padding: '20px 0',
                    border: 'solid gray'
                }}>
                    <img src={urlImg} alt="alert simbol" />
                    <Typography variant="h4" 
                                color="text.primary"
                                sx={{
                                    fontSize:'18px',
                                    fontWeight:600,
                                    lineHeight:'28px'
                                }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body1" 
                                color="text.primary"
                                sx={{
                                    fontSize:'16px',
                                    fontWeight:400,
                                    lineHeight:'24px',
                                    textAlign: 'center'
                                }}
                    >
                        {text}
                    </Typography>
            </Paper>
          
       </Grid>
    )
}