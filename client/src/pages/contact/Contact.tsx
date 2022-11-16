import { Grid, Paper, FormControl, FormLabel, FormHelperText } from '@mui/material'
import Typography from '@mui/material/Typography'
import ContactForm from './components/contact.form';
export default function Contact(){
    return(
        <Grid container
			spacing={2}
			padding='100px 0 100px 0'
			justifyContent='center'
        > 
            <Grid display='flex' 
                    sx={{
                        height:'950px',
                        width:'1440px'
                        }}
                    >
                        <Grid className="contactUs"
                            position='absolute'
                            marginTop='50px'
                            >
                            <Typography variant="h1" color="text.secondary" fontSize={64}>
                                Contactanos
                            </Typography>
                            <Typography
                                    component='p'
                                    variant='body1'
                                    color='text.primary'
                                    padding={1}
                                    sx={{ borderLeft: '3px solid', 
                                        borderColor: 'secondary.main',
                                        width:402,
                                        height:115 }}
                                >
                                    ¿Necesitas ayuda con tu practica de yoga? aqui te ayudamos 
                                    a cumplir con tus metas en el yoga, comienza poco a poca 
                                    agregando cada dia nuevas tareas, ve registrando y 
                                    evaluando tu progreso.

                                </Typography>
                        </Grid>
                        <Grid position='absolute'
                                padding= '60px 60px'
                                marginTop='50px'
                                marginLeft='700px'
                                display='grid'
                                justifyContent='center'
                                     sx={{
                                        height: 670,
                                        width: 600,
                                        border: '1px solid',
                                        borderRadius: '4px',
                                        borderColor: '#B2BCCA',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
                                        backgroundColor:'#FFFFFF'
                                        }}
                                >
                                    <Typography variant='h2' 
                                                textAlign='center'
                                                color='text.secondary'
                                                fontSize={32}
                                                fontWeight={700}
                                                lineHeight='38px'
                                                >
                                                     Contacto
                                    </Typography>
                          
                                    <ContactForm />
                        </Grid>
            </Grid>
        </Grid>
    );
}