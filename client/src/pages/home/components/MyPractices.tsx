import { fontFamily, lineHeight } from "@mui/system"

export default function MyPractices(){
    return<section
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#F4F4F4',
            fontFamily: 'Lora',
        }}>
        
 
        <h2 style={{
            justifyContent: 'center',
            display: 'flex',
            fontSize: '64px',
            fontWeight: '600px',
            lineHeight: '82px',
            color: '#2F6117'
        }}>Mis Prácticas</h2>

        <div className="containerHabits" style={{display:'flex', width:'1442px'}}>
                 
                 <div style={{
                    width:'785px',
                    height:'368px',
                    marginLeft: '40px',
                    marginRight: '23px',
                    fontWeight:'400',
                    letterSpacing: '-0,015em',
                    textAlign: 'left'
                }}>
                    <h3 style={{fontSize:'36px', lineHeight: '40px', color:'#2F6117'
                    }}>¿Qué son los 16 Hábitos y cómo funcionan?</h3>

                    <p style={{fontSize:'24px', lineHeight: '32px', color:'#112734B2',
                    }}> Los 16 puntos son un sistema de prácticas, que promueven la consolidación de hábitos en el estado 
                        físico y mental. Todo esto con el objetivo de conseguir una salud física, desarrollo mental y 
                        elevación espiritual. Está claro que por medio de hábitos adecuados se contribuye al funcionamiento
                        adecuado de ellas. Segundo, se puede conseguir un cuerpo saludable y una mente serena.</p>
                </div>

       
            <img src="https://res.cloudinary.com/dlxlitkl6/image/upload/v1668435967/ananda%20marga/home/my_practices_nsp7fc.jpg" alt="Sesión de yoga" 
                className="imageMyPractices" style={{width:'554px', height:'334px', marginRight: '40px'}}/></div>

</section>
}