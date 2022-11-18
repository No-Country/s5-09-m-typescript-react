import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { AboutCardItem } from './AboutGrid';

interface AboutCardProps {
  item: AboutCardItem;
}

export default function AboutCard({ item }: AboutCardProps) {
	return (
		<Stack spacing={4} alignItems="center" justifyContent="center" sx={{ padding: "16px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.18)", borderRadius: "4px"}}>
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <img style={{width: 100, height: 100, borderRadius: 50, background: "#D9D9D9", border: "1px solid #93C5FD"}}/>
        <Typography>
          {item.name}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
        <Typography>
          {item.rol}
        </Typography>
        <Typography>
          {item.website}
        </Typography>
      </Stack>
      <Stack spacing={1} direction="column" alignSelf="flex-start">
        <Typography>
          About me:
        </Typography>
        <Typography>
          {item.aboutme}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <IconButton sx={{border: "2px solid #DBEAFE"}}>
          <GoogleIcon />
        </IconButton>
        <IconButton sx={{border: "2px solid #DBEAFE"}}>
          <TwitterIcon />
        </IconButton>
        <IconButton sx={{border: "2px solid #DBEAFE"}}>
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
	);
}
