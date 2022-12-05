
import * as React from 'react';
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { Grid, Card, Typography,  FormControlLabel, Checkbox, FormGroup } from "@mui/material";


interface checksContent{
    tittle:string;
    urlImg:string;
}


export default function ProgressChecks({ tittle, urlImg }: checksContent){
    
const [checked, setChecked] = React.useState(false);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log({tittle},checked);
  
};
    return(
        <Card 
            sx={[
                {   height:'130px',
                    width:'240px',
                    margin:'20px',
                    border: '1px solid #DCDCDC',
                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius:'8px',
                    display:'flex',
                    flexDirection:'column',
                    position:'relative',
                    alignItems:'flex-start',   
                },
                !checked && {
                     border: '4px solid #9C51B7',
                }                   
            ]}>
            
            <Grid container
                sx={{
                borderBottom:'1px solid rgba(151, 151, 151, 0.2)',
                height:'110px',
                width:'220px',
                margin:'auto',
                display:'flex',
                flexDirection:'column',
                alignItems:'flex-start',
            }}> 

                <img src= {urlImg} alt='imagen check'
                                    style={{
                                        display:'inline-flex',
                                        height:'100px',
                                        width:'100px',
                }} />

                <Grid item
                        sx={{
                            position: 'absolute',
                            left: '87%',
                            top: '1%',
                        }}>
                    <FormGroup>
                    <FormControlLabel
                    control={<Checkbox 
                                onChange={handleChange}
                                icon={<CheckCircleOutline/>} 
                                checkedIcon={<CheckCircleOutline/>}
                                sx={{color:'#9C51B7'}} />}
                    label=''
                    />
                    </FormGroup>
                </Grid>
         
                <Typography sx={{
                                display:'flex',
                                fontSize:'18px',
                                fontWeight:400,
                                lineHeight:'1.5em',
                                margin:'auto 0',
                                textAlign:'center',
                                justifyContent:'center',
                                width:'50%',
                                height:'fit-content'
                             
                                }}>
                    {tittle}
                </Typography>
            </Grid>
          
        </Card>
    );
}