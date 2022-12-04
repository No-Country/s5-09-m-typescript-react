import { ExpandMore } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
	Accordion,
	Checkbox,
	AccordionDetails,
	AccordionSummary,
	FormControlLabel,
	FormGroup,
	Paper,
	Typography,
	IconButton,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import GlobalButton from './GlobalButton';
import { getHabits } from '../service/habits/habits';
import { onRegister } from '../service/register';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface Habits {
	data: Array<string>;
}
interface SetHabits {
	data: {
		name: string;
	};
}

type HabitsModalProps = {
	closeModal: () => {};
};

export default function HabitsModal({ closeModal }: HabitsModalProps) {
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user);
	const [changeHabits, setChangeHabits] = useState<string[]>([]);
	const [healthHabits, setHealthHabits] = useState<string[]>([]);
	const [alimentationHabits, setAlimentationHabits] = useState<string[]>([]);
	const [meditationHabits, setMeditationHabits] = useState<string[]>([]);
	const [physicalAct, setPhysicalAct] = useState<string[]>([]);
	const handleHabits = async () => {
		try {
			const res = (await getHabits()) as Habits; //buscar el id
			const habits = res.data;
			console.log('Lista completa de habitos', habits);
			setHealthHabits(
				habits.filter((habit: any) => {
					return habit.category.name === 'Salud';
				}),
			);
			setAlimentationHabits(
				habits.filter((habit: any) => {
					return habit.category.name === 'Alimentación';
				}),
			);
			setMeditationHabits(
				habits.filter((habit: any) => {
					return habit.category.name === 'Espiritualidad';
				}),
			);
			setPhysicalAct(
				habits.filter((habit: any) => {
					return habit.category.name === 'Limpieza externa e interna';
				}),
			);
		} catch (error) {
			return error;
		}
	};

	const handleHabitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name: habitId, value } = event.target;
		console.log('Habito seleccionado', { habitId, value });
		setChangeHabits(prev => [...prev, habitId]);
	};
	useEffect(() => {
		handleHabits();
	}, []);

	const handleSave = () => {
		const practiceArray = changeHabits.map(habitId => ({ practice: habitId }));
		const data = { ...user, practices: practiceArray };
		onRegister(data, dispatch);
	};

	return (
		<Grid
			container
			spacing={0}
			sx={{
				display: 'flex',
				justifyContent: 'center',

				height: '100%',
			}}
		>
			<Paper
				sx={{
					width: '450px',
					height: 'fit-content',
					padding: '30px 20px',
					margin: '20px auto',
				}}
			>
				<IconButton
					aria-label='close'
					onClick={closeModal}
					sx={{
						position: 'absolute',
						margin: '0 0 0 380px',
					}}
				>
					<CloseIcon />
				</IconButton>

				<Grid>
					<Typography
						variant='h1'
						color='text.secondary'
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
					<Typography
						variant='body1'
						color='text.primary'
						sx={{
							textAlign: 'center',
							fontSize: '20px',
							fontWeight: 400,
							lineHeight: '28px',
						}}
					>
						Empieza con pocos hábitos y vas aumentado progresivamente tus
						prácticas
					</Typography>
				</Grid>
				<Grid>
					<Accordion style={{ border: 'black', margin: '20px' }}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={{
								border: '1px solid rgba(17, 39, 52, 0.7)',
								borderRadius: '4px',
							}}
						>
							<Typography variant='body1' color='initial'>
								Meditación
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								boxShadow:
									'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
								borderRadius: '4px',
							}}
						>
							<FormGroup>
								{meditationHabits.map((meditationHabit: any) => {
									return (
										<FormControlLabel
											control={<Checkbox onChange={handleHabitChange} />}
											label={`${meditationHabit.name}`}
											name={meditationHabit._id}
										/>
									);
								})}
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Accordion style={{ border: 'black', margin: '20px' }}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={{
								border: '1px solid rgba(17, 39, 52, 0.7)',
								borderRadius: '4px',
							}}
						>
							<Typography variant='body1' color='initial'>
								Salud
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								boxShadow:
									'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
								borderRadius: '4px',
							}}
						>
							<FormGroup>
								{healthHabits.map((healthHabit: any) => {
									return (
										<FormControlLabel
											control={<Checkbox onChange={handleHabitChange} />}
											label={healthHabit.name}
											name={healthHabit._id}
										/>
									);
								})}
							</FormGroup>
						</AccordionDetails>
					</Accordion>

					<Accordion style={{ border: 'black', margin: '20px' }}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={{
								border: '1px solid rgba(17, 39, 52, 0.7)',
								borderRadius: '4px',
							}}
						>
							<Typography variant='body1' color='initial'>
								Actividad Fisica
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								boxShadow:
									'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
								borderRadius: '4px',
							}}
						>
							<FormGroup>
								{physicalAct.map((act: any) => {
									return (
										<FormControlLabel
											control={<Checkbox onChange={handleHabitChange} />}
											label={act.name}
											name={act._id}
										/>
									);
								})}
							</FormGroup>
						</AccordionDetails>
					</Accordion>

					<Accordion style={{ border: 'black', margin: '20px' }}>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={{
								border: '1px solid rgba(17, 39, 52, 0.7)',
								borderRadius: '4px',
							}}
						>
							<Typography variant='body1' color='initial'>
								Alimentación
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								boxShadow:
									'0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
								borderRadius: '4px',
							}}
						>
							<FormGroup>
								{alimentationHabits.map((alimentationHabit: any) => {
									return (
										<FormControlLabel
											control={<Checkbox onChange={handleHabitChange} />}
											label={alimentationHabit.name}
											name={alimentationHabit._id}
										/>
									);
								})}
							</FormGroup>
						</AccordionDetails>
					</Accordion>
				</Grid>
				<Grid sx={{ textAlign: 'center', marginBottom: '20px' }}>
					<GlobalButton text='Registrarse' width='370px' action={handleSave} />
				</Grid>
				<Grid sx={{ textAlign: 'center' }}>
					<GlobalButton
						text='Cancelar'
						width='370px'
						action={closeModal}
						sx={{
							backgroundColor: '#F9F9F9',
							color: '#FC802C',
							border: '2px solid #FC802C',
						}}
					/>
				</Grid>
			</Paper>
		</Grid>
	);
}
