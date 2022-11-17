import { Grid, Paper } from '@mui/material';
import PracticesCard from './components/PracticesCard';


export default function Practices(){
    return(
        <Grid
			container
			spacing={0}
			sx={{
				margin: '50px 90px',
			}}
		    >
                <Grid item lg={4} >
                    <Paper sx={{
                                width: '400px',
                                height: '700px',
                                backgroundColor: "#FFFFFF",
                                borderRadius: "4px",
                                border: "1px solid #B2BCCA",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
                            }}
                        >
                            
                    </Paper>
                </Grid>

                <Grid item lg={4}>
                <Grid>
                    <PracticesCard
                    tittle='Conoce nuestro sistema para consolidar los 16 habitos importantes en tu vida'
                    urlImg= 'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696054/ananda%20marga/Practices/my_practices1_hpsjzt.jpg'
                    text='Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...
                    Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet 
                    Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Techno
                    logy Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...'/>
                 
                 <PracticesCard
                    tittle='Conoce nuestro sistema para consolidar los 16 habitos importantes en tu vida'
                    urlImg= 'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696054/ananda%20marga/Practices/my_practices1_hpsjzt.jpg'
                    text='Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...
                    Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet 
                    Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Techno
                    logy Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...'/>
                 
                 
                </Grid>
                </Grid>

        </Grid>
    );
}