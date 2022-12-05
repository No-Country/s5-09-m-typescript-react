import { Paper, Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AlertModal {
	close: () => void;
	urlImg: string;
	title: string;
	text: string;
}

export default function AlertModal({ close, urlImg, title, text }: AlertModal) {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 999,
				backgroundColor: 'RGBA(156,81,183,0.49)',
				width: '100%',
				height: '100%',
			}}
		>
			<Paper
				sx={{
					position: 'absolute',
					top: '30%',
					left: '40%',
					width: '300px',
					height: '200px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alingItems: 'center',
					padding: '50px',
					borderRadius: '20px',
				}}
			>
				<img
					src={urlImg}
					alt='alert simbol'
					style={{
						height: '30px',
						width: '30px',
						margin: '0 auto',
					}}
				/>

				<IconButton
					aria-label='close'
					onClick={() => close()}
					sx={{
						float: 'right',
						display: 'inline-block',
						position: 'absolute',
						right: '0',
						top: '0',
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
		</Box>
	);
}
