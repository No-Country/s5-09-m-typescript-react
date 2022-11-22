import { CheckBox, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function HabitsModal(){
    return(
        <Grid container spacing={0}>
            <Paper 
            sx={{
                width:'400px',
                height: 'fit-content;'
            }}>
                <Accordion 
                        style={{ border:'black',
                                 margin: '20px'
                                }}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}>
                        <Typography variant="body1" color="initial">
                            Espiritual
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<CheckBox />} label='Asanas diarias' />
                            <FormControlLabel control={<CheckBox />} label='Lectura espiritual' />
                            <FormControlLabel control={<CheckBox />} label='Realizar servicio' />
                            <FormControlLabel control={<CheckBox />} label='Meditación dos veces al día' />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                        style={{ border:'black',
                                 margin: '20px'
                                }}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}>
                        <Typography variant="body1" color="initial">
                            Salud Física
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<CheckBox />} label='Ejercicio diario' />
                            <FormControlLabel control={<CheckBox />} label='Higiene corporal' />
                            
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                        style={{ border:'black',
                                 margin: '20px'
                                }}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}>
                        <Typography variant="body1" color="initial">
                            Alimentación
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<CheckBox />} label='Ayunar' />
                            <FormControlLabel control={<CheckBox />} label='Reducir consumo de carne' />
                            <FormControlLabel control={<CheckBox />} label='Tomar dos litros de agua al día' />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                
            </Paper>
        </Grid>

    )


}