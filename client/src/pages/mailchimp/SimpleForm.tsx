import MailchimpSubscribe from 'react-mailchimp-subscribe';
import BoletinInformativo from '../home/components/Newsletter';
const url =
	'https://gmail.us17.list-manage.com/subscribe/post?u=e0bafd0364cf5f4e9a1086fc7&amp;id=2dc319a29d&amp;f_id=00774fe0f0';

const SimpleForm = () => {
	return (
		<MailchimpSubscribe
			url={url}
			render={props => {
				const { subscribe, status, message } = props || {};

				return (
					<BoletinInformativo
						onSubmitted={formData => subscribe(formData)}
						status={status}
						message={message}
					/>
				);
			}}
		/>
	);
};

export default SimpleForm;
