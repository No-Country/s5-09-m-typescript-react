import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export interface cardContent {
	title: string;
	urlImg: string;
	text: {
		title: string;
		body1: string;
		subtitle: string;
		body2: string;
	};
}

export default function PanelCard({ title, urlImg, text }: cardContent) {
	return (
		<Paper
			sx={{
				margin: '14px auto',
				padding: '29px 17px',
				width: '963px',
				backgroundColor: '#FFFFFF',
				borderRadius: '5px',
				border: '1px solid #B2BCCA',
				boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.18)',
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography
						variant='h1'
						color='secondary'
						sx={{
							fontSize: '36px',
							textAlign: 'center',
							fontWeight: '400',
							lineHeight: '46px',
						}}
					>
						{title}
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<img
						src={urlImg}
						style={{
							width: '100%',
						}}
					/>
				</Grid>

				<Grid item xs={12} margin={'10px'}>
					<Typography variant='h4' marginBottom={'28px'}>
						{text.title}
					</Typography>
					<Typography
						variant='body1'
						color='initial'
						sx={{
							fontSize: '20px',
							textAlign: 'justify',
							fontWeight: '400',
							lineHeight: '28px',
						}}
					>
						{text.body1}
					</Typography>
					<Typography variant='h5' marginY={'28px'}>
						{text.subtitle}
					</Typography>
					<Typography
						variant='body1'
						color='initial'
						sx={{
							fontSize: '20px',
							textAlign: 'justify',
							fontWeight: '400',
							lineHeight: '28px',
						}}
					>
						{text.body2}
					</Typography>
				</Grid>
				<Grid
					item
					container
					xs={12}
					justifyContent='space-between'
					margin={'20px'}
				>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={1}
					>
						<ThumbUpOutlinedIcon />
						<Typography>Me Gusta</Typography>
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={1}
					>
						<BookmarkBorderOutlinedIcon />
						<Typography>Guardar</Typography>
					</Stack>
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={1}
					>
						<ShareOutlinedIcon />
						<Typography>Compartir</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
}
