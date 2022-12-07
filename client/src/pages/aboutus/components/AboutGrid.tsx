import Grid from '@mui/material/Grid';
import AboutCard from './AboutCard'

export interface AboutCardItem {
  name: string;
  rol: string;
  image?: string;
  website?: string;
  aboutme: string;
  behance?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

const AboutInfoList : AboutCardItem[] = [
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426378/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/Diana._png_elwmgu.png",
    name: "Diana Zambrano",
    rol: "UX design",
    aboutme: "Me encanta investigar, comprender procesos colectivos, trabajar en equipo y sobre todo dar soluciones útiles y agradables a problemas reales.",
    linkedin: "https://www.linkedin.com/in/diana-zambrano-sanabria-uxdesign/",
    behance: "https://www.behance.net/dianazambrano",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670428573/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/yamila_zinecp.jpg",
    name: "Yamila Gisele Paez",
    rol: "Fullstack Developer",
    aboutme: "Soy Yamila Paez, argentina actualmente viviendo en Brest, Francia. Soy Fullstack Developer Jr, con preferencia por el backend (NodeJs)",
    github: "https://github.com/Bellantra",
    linkedin: "https://www.linkedin.com/in/yamila-paez-70b7587b/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670427616/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/maxisinfondo4_uboe9h.png",
    name: "Maximiliano Miño",
    rol: "Backend Developer",
    aboutme: "description",
    github: "https://github.com/MaximilianoMino",
    linkedin: "https://www.linkedin.com/in/maximiliano-mi%C3%B1o-4876221a9/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670431065/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/ezequiel_astrada_b2oeji.jpg",
    name: "Ezequiel Astrada",
    rol: "Backend Developer",
    aboutme: "Desarrolador backend con 1 año de experiencia trabajando en tecnologías webs basadas en NodeJs. Tengo conocimientos de testing y metodologías ágiles (SCRUM). Estudiante avanzado de la Tecnicatura en Programación Informática en la Universidad Nacional de Quilmes. Autodidacta en constante aprendizaje",
    github: "https://github.com/as-ez",
    linkedin: "https://www.linkedin.com/in/as-ez",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426769/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/Federico_awj8od.png",
    name: "Federico Di Cillo",
    rol: "Frontend Developer",
    aboutme: "Soy desarrollador Full-Stack Jr., actualmente más orientado al Front End. Actualmente vivo en Argentina, y me gusta afrontar nuevos retos y seguir adquiriendo nuevos conocimientos día a día",
    github: "https://github.com/federicoDicillo",
    linkedin: "https://www.linkedin.com/in/federico-di-cillo-773579233/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426380/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/anderson_oxlie3.png",
    name: "Anderson Cifuentes",
    rol: "Frontend Developer",
    aboutme: "Soy un desarrollador Full-stack, que le encanta el frontend actualmente vivo en Colombia, y me gusta aprender día a dia para tener mas cosas las cuales pueda aprovechar.",
    github: "https://github.com/oNEOBYTEo",
    linkedin: "https://www.linkedin.com/in/anderson-cifuentes-b380a7231/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426995/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/Francisco_w49lzb.png",
    name: "Francisco Garcia Mendez",
    rol: "Frontend Developer",
    aboutme: "Argentino viviendo en Ciudad de México, México. Soy Front End Developer Junior, tutor de alumnos online y con ganas de aprender back end próximamente :)",
    github: "https://github.com/frangmen/",
    linkedin: "https://www.linkedin.com/in/francisco-garcia-mendez/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426379/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/emanuel_nrvakg.png",
    name: "Emanuel Palacio",
    rol: "Frontend Developer",
    aboutme: "Soy un desarrollador argentino, me apasiona el desarrollo frontEnd, actualmente estoy aprendiendo backend y me gusta dedicar tiempo todos los dias a aprender algo nuevo",
    github: "https://github.com/EmanuelPalacio",
    linkedin: "https://www.linkedin.com/in/emanuel-palacio/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426685/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/joaquin-no-background_eikito.png",
    name: "Joaquin Ramos",
    rol: "Frontend Developer",
    aboutme: "Desarrollador Web. Me caracterizo por ser curioso, constante y resiliente. Me interesa el desarrollo web y en general el sector IT porque siempre surgen soluciones innovadoras. El aprendizaje continuo es mi misión y mi visión es crear soluciones valiosas a través de la tecnología.",
    twitter: "https://twitter.com/joardev",
    github: "https://github.com/JoarDev",
    linkedin: "https://www.linkedin.com/in/joardev/",
  },
  {
    image: "https://res.cloudinary.com/dlxlitkl6/image/upload/v1670426379/dise%C3%B1o%20definitivo/nosotros%20fotos%20de%20perfil/RominaBello_cdmotr.png",
    name: "Romina Bello",
    rol: "QA Tester",
    aboutme: "Argentina viviendo en Alcoy, España. Soy QA Tester Funcional Manual, Experta en Metodologías Ágiles, Docente de alma y eterna estudiante.",
    linkedin: "https://www.linkedin.com/in/rominabello87/",
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
