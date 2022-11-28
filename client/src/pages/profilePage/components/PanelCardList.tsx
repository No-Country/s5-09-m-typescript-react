import { Box } from '@mui/material';
import PanelCard from './PanelCard';

const content = {
	title: 'Las mejores recetas para Yogui',
	urlImg:
		'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696062/ananda%20marga/Practices/my_practices3_afkvv9.png',
	text: {
		title: '¿Qué es Lorem Ipsum?',
		body1:
			'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum.',
		subtitle: '¿Por qué lo usamos?',
		body2:
			"Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web que aún están en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y cosas por el estilo). ¿De dónde viene?      . Richard McClintock, pro",
	},
};

const contentArray = [{ ...content }, { ...content }, { ...content }];

export default function PanelCardList() {
	return (
		<Box marginTop={'60px'}>
			{contentArray.map(item => (
				<PanelCard key={contentArray.indexOf(item)} {...item} />
			))}
		</Box>
	);
}
