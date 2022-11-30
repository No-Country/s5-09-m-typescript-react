
import { Grid, Typography } from "@mui/material";
import ProgressChecks from "./ProgressChecks";

export default function Progress(){
    return (
        <Grid container 
            sx={{
                padding:'50px',
                }}>
            <Grid item
					xs={12}
                    borderBottom={'2px solid #E7E8EA'}
					sx={{
                        margin: '0px auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
                        maxWidth: '200px',
                 
					}}
            >   
                <Typography sx={{
                    fontSize:'24px',
                    fontWeight:600,
                    lineHeight:'30px',
                }}> 
                        Registra tu tarea
                </Typography>
            </Grid>

            <Grid item 
                sx={{
                    display:'contents'
                }}>
              <ProgressChecks 
                            tittle='Meditar'
						    urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696054/ananda%20marga/Practices/my_practices1_hpsjzt.jpg'/>
                 <ProgressChecks 
                            tittle='Tomar agua'
						    urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696054/ananda%20marga/Practices/my_practices1_hpsjzt.jpg'/>
                 <ProgressChecks 
                            tittle='Asana'
						    urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696054/ananda%20marga/Practices/my_practices1_hpsjzt.jpg'/>
                
            </Grid>

        </Grid>
        
    );
}