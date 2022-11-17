import { LayoutForms } from '../../components';
import ContactForm from './components/ContactForm';
export default function Contact() {
	return (
		<LayoutForms
			tittle='Contactanos'
			text='Si tienes alguna duda o sugerencia, puedes dejarla en el siguiente formulario. En breve te responderemos.
    '
		>
			<ContactForm />
		</LayoutForms>
	);
}
