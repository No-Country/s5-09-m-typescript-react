import { Grid, Link, Paper, Typography } from '@mui/material';
import PracticesCard from './components/PracticesCard';

interface CardHabits {
	tittle: string;
	urlImg: string;
	ext: string;
	id: string;
}
const habitsList = [
	{ habit: 'Asanas', id: 'Asanas' },
	{ habit: 'Recetas saludables', id: 'Recetas' },
	{ habit: 'Ejercicio', id: 'ejercicio' },
	{ habit: 'Meditación', id: 'meditación' },
	{ habit: 'Higiene personal', id: 'higiene' },
	{ habit: 'Limpieza del hogar', id: 'limpieza' },
	{ habit: 'Lectura', id: 'lectura' },
	{ habit: 'Código de conducta', id: 'conducta' },
	{ habit: 'Servicio', id: 'servicio' },
	{ habit: 'Comer vegetales', id: 'vegetales' },
	{ habit: 'Beber Agua', id: 'beberAgua' },
	{ habit: 'Reducir ocio', id: 'ReducirOcio' },
	{ habit: 'Tiempo al aire libre', id: 'aireLibre' },
	{ habit: 'Evitar intoxicantes', id: 'intoxicantes' },
	{ habit: 'Ayunos', id: 'ayunos' },
	{ habit: 'Despertar al amanecer', id: 'despertar' },
];

const cardHabits: Array<CardHabits> = [
	{
		tittle: 'Asanas',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670252726/dise%C3%B1o%20definitivo/mis%20practicas/asanas_lludn8.svg',
		ext: 'A través de las asanas (asientos) es posible comprender cómo funciona nuestro cuerpo y cuáles son los estímulos que necesita para equilibrarse y armonizarse, ofreciendo una oportunidad de estiramiento, flexibilidad, comprensión, expansión, movilidad, inmovilidad... etc. Así como de expresión. Las posturas proporcionan equilibrio entre la energía vital y la mental, generando salud tanto física como psíquica. Consisten en una actividad que se realiza de forma suave y consciente.',
		id: 'Asanas',
	},
	{
		tittle: 'Recetas saludables',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670254369/dise%C3%B1o%20definitivo/mis%20practicas/recetasComidas_kji8ew.svg',
		ext: `A continuación te mostramos algunas recetas fáciles, ideales para yoguis!

		La sopa de lentejas con comino es un perfecto punto de partida para poner en práctica una cocina que sea a la vez saludable y gourmet. De hecho, con un pequeño racimo de cilantro, todo mezclado, se aportará un sabor incomparable que te permitirá quedarte saciad@ con toda la tranquilidad del mundo. La ventaja de este tipo de receta es que se puede modificar tantas veces como se desee siempre que se mantenga el ingrediente principal: las lentejas. De este modo, podemos modificar los ingredientes para una representación tan yóguica como sabrosa. ¡Piénsalo!
		
		¿Las batatas son tu perdición? Bueno, eso es bueno, ya que las batatas tienen menos calorías que las patatas y pueden se pueden combinar ​con muchos alimentos. Horneadas, asadas... formarán parte de cualquier dieta yogui, ya que se pueden sazonar con todas las especias que quieras (¡bueno no todas!): batata con cúrcuma, batata con ajo, batata con granada, hay numerosas combinaciones.La comida yóguica no tiene por qué ser aburrida. ¿Quieres preparar unas albóndigas de berenjena que, mezcladas con un poco de ajo, ghee (mantequilla clarificada) y varias especias, serán un verdadero momento gourmet de placer? Un plato saludable y bueno para la salud.
		
		Otro plato que suele resultar muy sencillo a la hora de cocinarlo es la mezcla de legumbres y verduras, que te permitirá combinar absolutamente todo aquello que quieras en un solo plato. Sencillo y rápido de preparar, simplemente mezcle, por ejemplo, lentejas de coral y calabacín, todo sazonado con cuidado, et voilà.`,
		id: 'Recetas',
	},
	{
		tittle: 'Ejercicio',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670260237/dise%C3%B1o%20definitivo/mis%20practicas/ejercisio_nakyhp.svg',
		ext: `
		¿Por qué debería hacer ejercicio?
		El ejercicio es beneficioso a cualquier edad. La actividad física regular también puede reducir a la mitad el riesgo de padecer enfermedades coronarias, derrames cerebrales, diabetes y algunos cánceres. También puede reducir el riesgo de padecer osteoporosis, que provoca que los huesos se vuelvan frágiles y tengan facilidad para romperse, así como aliviar dolores lumbares bajos y mitigar el agarrotamiento y el dolor de la artrosis.
		¿Cuánto ejercicio es suficiente?
		El nivel saludable recomendado de actividad física es de 30 minutos de ejercicio moderado durante al menos cinco días a la semana. Moderado se refiere a que sea suficiente para estimular el corazón y los pulmones para que esté más fuerte. Es decir, que tiene que respirar más rápido, con una frecuencia cardíaca más elevada y que también sentirá calor.
		`,
		id: 'ejercicio',
	},
	{
		tittle: 'Meditar',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670260016/dise%C3%B1o%20definitivo/mis%20practicas/meditacion_vdipon.svg',
		ext: `Puedes escuchar distintos consejos en relación al tiempo de meditación recomendable. Cada maestro tiene su propia percepción, finalmente serás tú quien decida y adapte el tiempo disponible para cultivar la atención plena. 10 minutos, una hora, dos veces al día. A medida que vayas construyendo una base y practicando la meditación e integrándola en tu día a día parece que media hora es una duración adecuada al objetivo perseguido en cada caso. Ahora bien, cuanto más practiques, más rápido serás capaz de relajarte y cultivar la conciencia plena, y podrás entrenarte para alcanzar algún grado de iluminación. Sentarte durante media hora te ayudará a construir una rutina y generar como un gran contenedor para una práctica de enraizamiento. Si no tienes media hora, practica todo el tiempo que puedas, si sólo son diez minutos será muy beneficioso para tu práctica.`,
		id: 'meditación',
	},
	{
		tittle: 'Higiene personal',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670260688/dise%C3%B1o%20definitivo/mis%20practicas/higiene_xtvgsk.svg',
		ext: `La higiene personal se trata de mantener el cuerpo limpio y sano. Una buena higiene personal puede hacer que sea menos propenso a las enfermedades. También puede ayudarlo a verse y sentirse lo mejor posible.`,
		id: 'higiene',
	},
	{
		tittle: 'Limpieza del hogar',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670262872/dise%C3%B1o%20definitivo/mis%20practicas/limpiezaHogar_bjfn3t.svg',
		ext: `Mantener un orden te ayudará a sentirte más libre y feliz. A continuación te sugerimos algunos tips para que los apliques en tu rutina diaria:

		Dormitorios (10 min). Ahueca las almohadas, haz las camas y sacude las cortinas para sacar el polvo. Con un plumero atrapapolvo, limpia lámparas y molduras; con un multiuso, mesillas y frentes de armario.

		Salón (10 min). Aspira los asientos y ahueca los cojines. Pasa el plumero o limpia los muebles con un multiuso. Para acabar, aspira las alfombras.

		Baño (15 min). Pulveriza con agua y vinagre los sanitarios y deja actuar. Mientras, limpia con desinfectante el inodoro y la encimera. Enjuaga el vinagre y seca. Repasa los grifos con toallitas de usar y tirar. Limpia las salpicaduras de mampara y espejo.

		Cocina (15 min). Pulveriza antigrasa en la campana y el frente de cocción. Mientras actúa, repasa la nevera y el interior del microondas con la bayeta mojada en agua caliente. Enjuaga y seca lo primero; limpia la vitrocerámica, la encimera con desinfectante y el fregadero y grifos con agua y jabón.

		Suelos (10 min). Pasa el aspirador, es más rápido que barrer y no levanta polvo. Para terminar, pasa la mopa con limpiamuebles si son de madera. Si no, friégalos.
		`,
		id: 'limpieza',
	},
	{
		tittle: 'Lectura',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670261341/dise%C3%B1o%20definitivo/mis%20practicas/leer_rmbbv2.svg',
		ext: `Relajarse o practicar el mindfulness está muy bien. O dormir y comer bien. Pero leer es una de las actividades que no acostumbramos a relacionar con el bienestar físico y mental y, sin embargo, es muy eficaz para favorecerlo.

		Leer se puede entender como una forma de meditación que requiere de plena concentración. Se puede wasapear mientras se ve la televisión, pero no se puede leer mientras se hace ninguna otra cosa.
		
		Por cierto, leer es tener un libro entre las manos, no saltar de artículo en artículo por internet.
		`,
		id: 'lectura',
	},
	{
		tittle: 'Código de conducta',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670261833/dise%C3%B1o%20definitivo/mis%20practicas/Tiny_business_people_reading_list_of_rules_zvycak.svg',
		ext: `Estas prácticas te ayudarán a mantener una buena convivencia con tu entorno y a ser cada día una mejor persona.
		Respeto: reconocimiento, valoración y aceptación del otro. El respeto permite que la sociedad viva en paz. Implica reconocer en sí y en los demás, los valores y las necesidades. Los derechos y las obligaciones. 
		Independencia: salvaguarda de fidelidad a nuestra identidad que nos compromete y vincula con la protección y promoción de los derechos humanos. Imparcialidad: implica que el acompañamiento a las personas y grupos debe realizarse en función de sus necesidades, sin discriminación por raza, sexo, ideología o cualquier otro motivo. 
		Transparencia: consiste en comunicar y rendir cuentas de forma proactiva a los diferentes grupos de interés que han participado de alguna forma en la organización y a la sociedad en general sobre lo qué se hace, cómo se hace y los resultados obtenidos, durante un período de tiempo determinado. 
		
		`,
		id: 'conducta',
	},
	{
		tittle: 'Servicio',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670262214/dise%C3%B1o%20definitivo/mis%20practicas/Realizar_servicio_zmtojl.svg',
		ext: `como ocurre al realizar cualquier acto altruista, el servicio social nos ayuda a sentirnos realizados como seres humanos y le da más sentido a nuestra vida;
		las necesidades reales de la gente siempre son más complejas de lo que cualquier libro de texto pueda enseñarnos, y por eso el trabajo cara a cara con las personas nos da lecciones invaluables, que a su vez nos preparan para actuar mejor en la práctica;
		el servicio social sirve también para generar conciencia en la comunidad acerca de algunos valores que parecen perderse con el tiempo, como ser el compromiso y la solidaridad;
		
		`,
		id: 'servicio',
	},
	{
		tittle: 'Comer vegetales',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670262678/dise%C3%B1o%20definitivo/mis%20practicas/vegetariano_dtmrxy.svg',
		ext: `
		Existe un mito muy extendido de que la carne es imprescindible para mantener la salud del organismo. Esto es falso ya que disponemos de una amplia variedad de alimentos que nos proporcionan los nutrientes necesarios para mantener las necesidades cubiertas. Un ejemplo es el pescado.
		Además, tal y como menciona una investigación publicada por la Revista de Nutrición Hospitalaria, un elevado consumo de carne roja y carne procesada estarían detrás del aumento del índice de obesidad.	
		`,
		id: 'vegetales',
	},
	{
		tittle: 'Beber agua',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670263595/dise%C3%B1o%20definitivo/mis%20practicas/beber_agua_sxb9th.svg',
		ext: `
		La mayoría de las personas beben agua solamente cuando tienen sed, creyendo que esto es más que suficiente. Así, se limitan a beber uno o dos vasos al día, sin tener en cuenta que para mantener una hidratación adecuada, hace falta beber algo más que dos vasos de agua.
		Si bien es importante beber agua en función de la sed a lo largo del día, también hay que estar conscientes de que no hay que conformarse con beber uno o dos vasos al día, y “complementar” el resto con otras bebidas, como un jugo de frutas, un vaso de alcohol, o varios vasos de refresco de cola. Ninguna bebida puede sustituir el aporte del agua.
	
		`,
		id: 'beberAgua',
	},
	{
		tittle: 'Reducir ocio',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670263840/dise%C3%B1o%20definitivo/mis%20practicas/tiempoLibre_xnwowv.svg',
		ext: `
		El aburrimiento puede ser la puerta de entrada a una oportunidad de crecimiento. Y cuando hablo de invertir nuestro tiempo en ser productivos, también me gusta pensar en el hecho de darnos un merecido descanso ante tanto bombardeo informativo que recibimos a diario, desde todos los costados.
		`,
		id: 'ReducirOcio',
	},
	{
		tittle: 'Tiempo al aire libre',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670264048/dise%C3%B1o%20definitivo/mis%20practicas/tiempoAlAireLibre_ga7qma.svg',
		ext: `
		Salir y estar en contacto con la naturaleza aporta más beneficios de los que podrías imaginar. Si bien ya se sabía que los espacios verdes se relacionan con un mejor descanso, así como con efectos positivos en la salud mental y visual, un nuevo estudio ha revelado que estar al aire libre tiene un fuerte impacto en el bienestar a largo plazo.
		`,
		id: 'aireLibre',
	},
	{
		tittle: 'Evitar intoxicantes',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670264248/dise%C3%B1o%20definitivo/mis%20practicas/noDrugs_ubxaek.svg',
		ext: `
		La relación entre consumo de tabaco y alcohol está poco estudiada y poco tenida en cuenta por los profesionales. Tanto el alcohol como la nicotina son drogas psicoactivas que se potencian mutuamente, y comparten la tendencia a “ no ser vistas» por  los profesionales sanitarios,  es decir, la poca disposición a ver el problema y a intervenir.
		`,
		id: 'intoxicantes',
	},
	{
		tittle: 'Ayunos',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670264379/dise%C3%B1o%20definitivo/mis%20practicas/Ayunar_efh8ei.svg',
		ext: `
		El ayuno es una práctica que se ha llevado a cabo desde tiempos inmemoriales en casi todas las culturas. En un principio se realizaba por motivos básicamente sagrados. Se ayunaba colectivamente, en ciertas épocas, con la finalidad de hacer un homenaje a Dios o para que fuera concedida alguna gracia.
		De hecho, hoy en día se mantiene ese espíritu en prácticas como la Cuaresma católica o el Ramadán de los musulmanes. Y, con el tiempo, se ha descubierto que el ayuno puede traer grandes beneficios tanto al cuerpo como a la mente.
		`,
		id: 'ayunos',
	},
	{
		tittle: 'Despertar al amanecer',
		urlImg:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670264542/dise%C3%B1o%20definitivo/mis%20practicas/madrugar_ufsvbh.svg',
		ext: `
		Conoce cuáles son las ventajas de poner tu despertador a las 5 de la mañana.
		Autocontrol: te ayuda a tener más disciplina y ser más riguroso en muchas otras áreas de tu vida. El día te alcanzará para hacer más cosas, tanto de ocio como de trabajo. Esto incluye salir a caminar o ir al gimnasio.
		Buena salud: lo pensarás más de dos salir de fiesta hasta tarde y tomar de más para no dejar de levantarte temprano y alterar tu rutina.

		`,
		id: 'despertar',
	},
];

export default function Practices() {
	return (
		<Grid
			container
			spacing={0}
			sx={{
				maxWidth: '1442px',
				margin: '40px auto',
			}}
		>
			<Grid item lg={4}>
				<Paper
					sx={{
						margin: '10px ',
						width: '400px',
						height: '600px',
						backgroundColor: 'primary.main',
						borderRadius: '5px',
						border: '1px solid',
						borderColor: 'third.main',
						padding: '20px',
						position: 'sticky',
						top: '110px',
					}}
				>
					{habitsList.map(i => (
						<Link
							href={`#${i.id}`}
							variant='body1'
							color='third.main'
							key={habitsList.indexOf(i)}
							sx={{
								display: 'block',
								fontWeight: '400',
								lineHeight: '36px',
								textDecoration: 'none',
							}}
						>
							Hábito {habitsList.indexOf(i) + 1}:{' '}
							<Typography
								color={'text.secondary'}
								component='span'
								variant='body1'
							>
								{i.habit}
							</Typography>
						</Link>
					))}
				</Paper>
			</Grid>

			<Grid item lg={8}>
				<Grid>
					{cardHabits.map((e: CardHabits) => {
						return (
							<PracticesCard
								id={e.id}
								key={cardHabits.indexOf(e)}
								tittle={e.tittle}
								urlImg={e.urlImg}
								text={e.ext}
							/>
						);
					})}
				</Grid>
			</Grid>
		</Grid>
	);
}
