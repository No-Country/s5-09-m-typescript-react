import { Button, Grid, Paper, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AlertModal {
	close: () => void;
	urlImg: string;
	title: string;
	text: string;
}

export default function AlertModal({ close, urlImg, title, text }: AlertModal) {
	return (
		<Grid
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 999,
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0,0,0,0.25)'
			}}
		>
			<Paper
				sx={{
					marginTop: '130px',
					width: '400px',
					height: '200px',
					display: 'block',
					flexDirection: 'column',
					padding: '20px 20px',
					border: 'solid gray',
				}}
			>
				<img
					src={urlImg}
					alt='alert simbol'
					style={{
						display: 'inline-block',
						position: 'relative',
						left: '150px',
					}}
				/>

				<IconButton
					aria-label='close'
					onClick={() => close()}
					sx={{
						float: 'right',
						display: 'inline-block',
					}}
				>
					<CloseIcon />
				</IconButton>
				<Typography
					variant='h4'
					color='text.primary'
					sx={{
						fontSize: '18px',
						fontWeight: 600,
						lineHeight: '28px',
						margin: '5px 0',
						textAlign: 'center',
					}}
				>
					{title}
				</Typography>

				<Typography
					variant='body1'
					color='text.primary'
					sx={{
						fontSize: '16px',
						fontWeight: 400,
						lineHeight: '24px',
						textAlign: 'center',
					}}
				>
					{text}
				</Typography>
			</Paper>
		</Grid>
	);
}
