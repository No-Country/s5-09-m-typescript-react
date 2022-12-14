import MailchimpSubscribe from 'react-mailchimp-subscribe';
import BoletinInformativo from '../../pages/home/components/Newsletter';
const url =
	'https://gmail.us17.list-manage.com/subscribe/post?u=e0bafd0364cf5f4e9a1086fc7&amp;id=2dc319a29d&amp;f_id=00774fe0f0';

export const SimpleForm = () => {
	return (
		<MailchimpSubscribe
			url={url}
			render={(props: any) => {
				const { subscribe, status, message } = props || {};

				return (
					<BoletinInformativo
						onSubmitted={(formData: any) => subscribe(formData)}
						status={status}
						message={message}
					/>
				);
			}}
		/>
	);
};
