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
  {
    name: "Bessie Cooper",
    rol: "Web Developer",
    website: "Websitename.com",
    aboutme: "Hi I'm Bessie Cooper,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    google: "google.com",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  },
  {
    name: "Bessie Cooper",
    rol: "Web Developer",
    website: "Websitename.com",
    aboutme: "Hi I'm Bessie Cooper,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    google: "google.com",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  },
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
		<Grid container columnSpacing={{ xs: 0, sm: 8 }} rowSpacing={{ xs: 3, sm: 5 }} >
      {
        AboutInfoList.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <AboutCard item={item} />
          </Grid>
        ))
      }
    </Grid>
	);
}
