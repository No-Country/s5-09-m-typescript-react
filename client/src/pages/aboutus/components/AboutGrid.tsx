import Grid from '@mui/material/Grid';
import AboutCard from './AboutCard'

export interface AboutCardItem {
  name: string;
  rol: string;
  website: string;
  aboutme: string;
  google: string;
  twitter: string;
  linkedin: string;
}

const AboutInfoList : AboutCardItem[] = [
  {
    name: "Bessie Cooper",
    rol: "Web Developer",
    website: "Websitename.com",
    aboutme: "Hi I'm Bessie Cooper,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    google: "google.com",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  },
]

export default function AboutGrid() {
	return (
		<Grid container spacing={2}>
      {
        AboutInfoList.map((item) => (
          <Grid item xs={4} >
            <AboutCard item={item} />
          </Grid>
        ))
      }
    </Grid>
	);
}
