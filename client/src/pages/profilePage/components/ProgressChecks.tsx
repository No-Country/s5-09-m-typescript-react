import * as React from 'react';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';

import {
	Grid,
	Card,
	Typography,
	FormControlLabel,
	Checkbox,
	FormGroup,
} from '@mui/material';

interface checksContent {
	tittle: string;
	urlImg: string;
  checkHabit: (checked : boolean) => void;
}

export default function ProgressChecks({ tittle, urlImg, checkHabit }: checksContent) {
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkHabit(event.target.checked);
		setChecked(event.target.checked);
		console.log(event.target.checked);
	};
	return (
		<Card
			sx={[
				{
					height: '130px',
					width: '240px',
					margin: '20px',
					border: '1px solid #DCDCDC',
					boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
					borderRadius: '8px',
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					alignItems: 'flex-start',
				},
				checked && {
					backgroundColor: 'rgb(40,158,134,0.2)',
				},
			]}
		>
			<Grid
				container
				sx={{
					borderBottom: '1px solid rgba(151, 151, 151, 0.2)',
					height: '110px',
					width: '220px',
					margin: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<img
					src={urlImg}
					alt='imagen check'
					style={{
						display: 'inline-flex',
						height: '100px',
						width: '100px',
					}}
				/>

				<Grid
					className='aca estoyyyyyyyyyyy'
					item
					sx={{
						position: 'absolute',
						left: '87%',
						top: '1%',
					}}
				>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									sx={{
										width: '',
										color: 'secondary.main',
										'&.Mui-checked': {
											color: 'secondary.main',
										},
									}}
									checked={checked}
									onChange={handleChange}
									icon={<CheckBoxOutlineBlank />}
									checkedIcon={<CheckBox />}
								/>
							}
							label=''
						/>
					</FormGroup>
				</Grid>

				<Typography
					sx={{
						display: 'flex',
						fontSize: '18px',
						fontWeight: 400,
						lineHeight: '1.5em',
						margin: 'auto 0',
						textAlign: 'center',
						justifyContent: 'center',
						width: '50%',
						height: 'fit-content',
					}}
				>
					{tittle}
				</Typography>
			</Grid>
		</Card>
	);
}
