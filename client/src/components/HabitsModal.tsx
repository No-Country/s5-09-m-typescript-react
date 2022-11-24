import { ExpandMore } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close';
import { Accordion, Checkbox, AccordionDetails, AccordionSummary, FormControlLabel, FormGroup, Paper, Typography, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import GlobalButton from './GlobalButton';

interface HabitsModal {
    close: () => void;
}

export default function HabitsModal({close}:HabitsModal){

    const [habits, setHabits] = useState<string[]>([]);
   
    const handleHabitChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        setHabits({
            ...habits,
            [name]: value,
          });
    } ;
    useEffect(()=>{
        console.log({habits})
    },[habits])

    return(
        <Grid container spacing={0}
            sx={{
                position:'absolute',
                display:'block',
                zIndex:999,
            }}
            > 
            <Paper 
                sx={{
                    width:'450px',
                    height: 'fit-content',
                    padding:'30px 20px',
                    margin:'20px auto'
                    
                }}>
                        <IconButton aria-label="close" 
                                    onClick={() => close()}
                                    sx={{ 
                                        position:'absolute',
                                        margin:'0 0 0 380px'
                                        }}
                        >
                            <CloseIcon />
                        </IconButton>
                           
                <Grid>
                    <Typography variant="h1" 
                                color="text.secondary" 
                                sx={{ 
                                    textAlign: 'center',
                                    fontSize: 24, 
                                    fontWeight: 600,
                                    lineHeight: '28px',
                                    marginBottom: '10px',
                                    }}  
                    > 
                        Selecciona tus hábitos
                    </Typography>
                    <Typography variant="body1" 
                                color="text.primary" 
                                sx={{ 
                                    textAlign: 'center',
                                    fontSize: '20px', 
                                    fontWeight: 400,
                                    lineHeight: '28px' 
                                    }}  
                    >
                        Empieza con pocos hábitos y vas aumentado progresivamente tus prácticas
                    </Typography>
                </Grid>
                <Grid>
                <Accordion 
                        style={{ border:'black',
                                 margin: '20px'
                                }}
                    >
                    <AccordionSummary
                            expandIcon={<ExpandMore />}
                            sx={{
                                border:'1px solid rgba(17, 39, 52, 0.7)',
                                borderRadius: '4px'
                            }}
                        >
                        <Typography variant="body1" color="initial">
                            Espiritual
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            boxShadow:'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '4px'
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel 
                                control={<Checkbox onChange={handleHabitChange} />} 
                                label='Asanas diarias'
                                name='Asanas diarias' />
                            <FormControlLabel 
                                control={<Checkbox onChange={handleHabitChange} />} 
                                label='Lectura espiritual'
                                name='Lectura espiritual'  />
                            <FormControlLabel 
                                control={<Checkbox onChange={handleHabitChange} />} 
                                label='Realizar servicio'
                                name='Realizar servicio'/>
                            <FormControlLabel 
                                control={<Checkbox onChange={handleHabitChange} />} 
                                label='Meditación dos veces al día' 
                                name='Meditación dos veces al día'/>
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                        style={{ border:'black',
                                 margin: '20px'
                                }}
                    >
                    <AccordionSummary
                             expandIcon={<ExpandMore />}
                             sx={{
                                 border:'1px solid rgba(17, 39, 52, 0.7)',
                                 borderRadius: '4px'
                             }}
                        >
                        <Typography variant="body1" color="initial">
                            Salud Física
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                         sx={{
                            boxShadow:'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '4px'
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label='Ejercicio diario' />
                            <FormControlLabel control={<Checkbox />} label='Higiene corporal' />
                            
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                        style={{ border:'black',
                                 margin: '20px'
                                }}
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            border:'1px solid rgba(17, 39, 52, 0.7)',
                            borderRadius: '4px'
                        }}
                    >
                        <Typography variant="body1" color="initial">
                            Alimentación
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                         sx={{
                            boxShadow:'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '4px'
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label='Ayunar' />
                            <FormControlLabel control={<Checkbox />} label='Reducir consumo de carne' />
                            <FormControlLabel control={<Checkbox />} label='Tomar dos litros de agua al día' />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                </Grid>

                <GlobalButton text='Guardar' action={() => close()} />
                <GlobalButton text='Cancelar' action={() => close()} />       
            </Paper>
        </Grid>

    )


}