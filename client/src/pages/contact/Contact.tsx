import { LayoutForms } from '../../components';
import ContactForm from './components/ContactForm';
export default function Contact() {
	return (
		<LayoutForms
			tittle='Contactanos'
			text='Si tienes alguna duda o sugerencia, puedes dejarla en el siguiente formulario. En breve te responderemos.'
			imgUrl='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670295350/dise%C3%B1o%20definitivo/formularios/img-contacto_wl4hwj.svg'
		>
			<ContactForm />
		</LayoutForms>
	);
}
