import axios from 'axios'

import { mailchimpApiKey, mailchimpAudience } from '../../config/globals'

export const mailchimpService = async (email: string) => {
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
            },
        ],
    }

    const postData = JSON.stringify(data)
    try {
        await axios.post(
            `https://us17.api.mailchimp.com/3.0/lists/${mailchimpAudience}/`,
            postData,
            {
                headers: {
                    Authorization: `auth ${mailchimpApiKey}`,
                },
            }
        )
    } catch (error) {
        return error
    }
}
