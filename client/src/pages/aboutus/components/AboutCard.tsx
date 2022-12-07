import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { AboutCardItem } from './AboutGrid';

interface AboutCardProps {
  item: AboutCardItem;
}

export default function AboutCard({ item }: AboutCardProps) {
	return (
		<Stack spacing={4} alignItems="center" justifyContent="center" sx={{ padding: "16px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.18)", borderRadius: "4px"}}>
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <img src={item.image} style={{width: 100, height: 100, borderRadius: 50, border: "1px solid #93C5FD"}}/>
        <Typography>
          {item.name}
        </Typography>
      </Stack>
      {
        item.website ? (
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} divider={<Divider orientation="vertical" flexItem />}>
            <Typography>
              {item.rol}
            </Typography>
            <Typography>
              {item.website}
            </Typography>
          </Stack>
        ) : (
          <Typography>
            {item.rol}
          </Typography>
        )
      }
      <Stack spacing={1} direction="column" alignSelf="flex-start">
        <Typography>
          Sobre mi:
        </Typography>
        <Typography>
          {item.aboutme}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        {
          item.github && (
            <a href={item.github} target="_blank">
              <IconButton sx={{border: "2px solid #9C51B7"}}>
                <GitHubIcon color="secondary"/>
              </IconButton>
            </a>
          )
        }
        {
          item.behance && (
            <a href={item.behance} target="_blank">
              <IconButton sx={{border: "2px solid #9C51B7"}} >
                  <img src="https://res.cloudinary.com/dlxlitkl6/image/upload/v1670424402/dise%C3%B1o%20definitivo/Iconos%20nosotros/behance_fcx7lz.png" />
              </IconButton>
            </a>
          )
        }
        {
          item.twitter && (
            <a href={item.twitter} target="_blank">
              <IconButton sx={{border: "2px solid #9C51B7"}}>
                <TwitterIcon color="secondary"/>
              </IconButton>
            </a>
          )
        }
        {
          item.linkedin && (
            <a href={item.linkedin} target="_blank">
              <IconButton sx={{border: "2px solid #9C51B7"}}>
                <LinkedInIcon color="secondary"/>
              </IconButton>
            </a>
          )
        }
      </Stack>
    </Stack>
	);
}
