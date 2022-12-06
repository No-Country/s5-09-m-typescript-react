import { Grid, Paper, Typography } from '@mui/material';
import { margin } from '@mui/system';
import { cardContent } from '../types/interfaces';

export default function PracticesCard({
	tittle,
	urlImg,
	text,
	id,
}: cardContent) {
	return (
		<Paper
			id={id}
			sx={{
				margin: '10px auto',
				paddingBottom: '50px',
				width: '800px',
				height: '100%',
				backgroundColor: 'primary.main',
				borderRadius: '5px',
				border: '1px solid',
				borderColor: 'third.main',
				boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
			}}
		>
			<Grid container spacing={0}>
				<Grid item xs={12} padding='0 30px'>
					<Typography
						variant='h1'
						color='third.main'
						sx={{
							fontSize: '36px',
							textAlign: 'center',
							marginTop: '30px',
							fontWeight: '600',
							lineHeight: '46px',
						}}
					>
						{tittle}
					</Typography>
				</Grid>

				<Grid item xs={12} padding='20px'>
					<img
						src={urlImg}
						style={{
							width: '100%',
						}}
					/>
				</Grid>

				<Grid item xs={12} padding='0 30px'>
					<Typography
						variant='body1'
						sx={{
							fontSize: '20px',
							textAlign: 'center',
							fontWeight: '400',
							lineHeight: '28px',
							color: 'text.secondary',
						}}
					>
						{text}
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
