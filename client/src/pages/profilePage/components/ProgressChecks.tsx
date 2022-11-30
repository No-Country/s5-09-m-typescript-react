
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { Grid, Card, Paper, Typography, IconButton, FormControl, FormLabel, FormHelperText, FormControlLabel, Checkbox, FormGroup } from "@mui/material";

interface checksContent{
    tittle:string;
    urlImg:string;
}
export default function ProgressChecks({ tittle, urlImg }: checksContent){
    return(
        <Card 
            sx={{
                    height:'130px',
                    width:'240px',
                    margin:'20px',
                    border: '1px solid #DCDCDC',
                    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius:'8px',
                    display:'flex',
                    flexDirection:'column',
                    position:'relative',
                    alignItems:'flex-start',
                  
        }}>
            
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
                            left: '85%',
                            top: '5%',
                        }}>
                    <FormGroup>
                    <FormControlLabel
                    control={<Checkbox icon={<CheckCircleOutline/>} checkedIcon={<CheckCircleOutline/>} />}
                    label=''
                    />
                    </FormGroup>
                </Grid>
         
                <Typography sx={{
                                display:'inline-flex',
                                fontSize:'24px',
                                fontWeight:400,
                                lineHeight:'36px',
                                textAlign:'center',
                                margin:'auto 0',
                                }}>
                    {tittle}
                </Typography>
            </Grid>
          
        </Card>
    );
}