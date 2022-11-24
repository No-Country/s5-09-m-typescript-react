import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import { GlobalButton } from '../../../components';
import { Stack } from '@mui/system';

const sideTextButton = [
	'Hoy',
	'Ayer',
	'Esta semana',
	'La semana pasada',
	'Este mes',
	'El mes pasado',
	'Mostrar todo',
];

const TextButton = ({ text, ...props }: { text: string }) => (
	<Button
		{...props}
		variant='text'
		size='small'
		sx={{
			justifyContent: 'flex-start',
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: '20px',
			textTransform: 'capitalize',
			color: '#344054',
		}}
	>
		{text}
	</Button>
);

export default function Calendar() {
	return (
		<Stack direction='row' justifyContent='center' alignItems='center'>
			<Stack
				direction={'row'}
				divider={<Divider orientation='vertical' flexItem />}
				sx={{
					width: '1008px',
					height: '670px',
					border: '1px solid #F2F4F7',
					boxShadow:
						'0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
					borderRadius: '12px',
					backgroundColor: '#FFFFFF',
				}}
			>
				<Stack
					direction={'column'}
					spacing={2}
					justifyContent='flex-start'
					sx={{ width: '280px', paddingTop: '24px', paddingX: '32px' }}
				>
					{sideTextButton.map(text => (
						<TextButton key={sideTextButton.indexOf(text)} text={text} />
					))}
				</Stack>
				<Grid
					container
					spacing={3}
					direction='row'
					justifyContent='center'
					alignItems='center'
				>
					<Grid item xs={12}>
						<Stack
							direction='row'
							divider={<Divider orientation='vertical' flexItem />}
						>
							<CalendarPicker date={new Date()} onChange={() => {}} />
							<CalendarPicker date={new Date()} onChange={() => {}} />
						</Stack>
					</Grid>
					<Grid item xs={12} container justifyContent={'flex-end'}>
						<GlobalButton
							sx={{ marginRight: '32px' }}
							text='Guardar'
							action={() => {}}
						/>
					</Grid>
					<Grid item xs={12} container justifyContent={'center'}>
						<Stack direction={'column'} spacing={3}>
							<Stack
								direction={'row'}
								justifyContent='center'
								alignItems='center'
								spacing={2}
							>
								<TextField value={'Jan 6, 2022'} />
								<Typography
									component={'span'}
									sx={{
										fontWeight: 400,
										fontSize: '25px',
										lineHeight: '24px',
									}}
								>
									{' - '}
								</Typography>
								<TextField value={'ayunos'} />
							</Stack>
							<Stack
								direction={'row'}
								justifyContent='center'
								alignItems='center'
								spacing={2}
							>
								<TextField value={'Jan 6, 2022'} />
								<Typography
									component={'span'}
									sx={{
										fontWeight: 400,
										fontSize: '25px',
										lineHeight: '24px',
									}}
								>
									{' - '}
								</Typography>
								<TextField value={'Asana'} />
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Stack>
		</Stack>
	);
}
