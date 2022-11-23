import { Button, Grid, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface AlertModal {
    close: () => void;
	urlImg: string;
    title: string;
    text: string;
}

export default function AlertModal({
    close,
    urlImg,
	title,
    text,	
}: AlertModal){

    return(
    
      
       <Grid sx={{
                
                position:'absolute',
                top:0,
                left: 0,
                zIndex:999,
                backgroundColor:'rgba(0,0,0,0.15)',
                display: 'flex',
                justifyContent: 'center',
                width:'100%',
                height:'100%'

       }}>
            <Paper
                sx={{
                    marginTop:'150px',
                    width:'400px',
                    height:'200px',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    padding: '20px 20px',
                    border: 'solid gray'
                }}> 
                
                    <IconButton aria-label="close" 
                                onClick={() => close()}
                    >
                        <CloseIcon />
                    </IconButton>

                    <img src={urlImg} alt="alert simbol" />

                    <Typography variant="h4" 
                                color="text.primary"
                                sx={{
                                    fontSize:'18px',
                                    fontWeight:600,
                                    lineHeight:'28px',
                                    margin:'5px 0'
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