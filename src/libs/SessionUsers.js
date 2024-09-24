// src/libs/SessionUsers.js
import axios from 'axios';

export default async function SessionUsers(context) {
  try {
    const cookie = context?.req?.headers?.cookie || '';

    const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/me`, {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    });

    return response
  } catch (error) {
    console.error("Error fetching session data:", error);
  }

}
