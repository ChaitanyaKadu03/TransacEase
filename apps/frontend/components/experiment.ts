// import axios from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function signup_logic() {
//     try {
//         const result = await axios.post("http://127.0.0.1:8000/api/auth/signup", {
//             email: "chaitanyakadu.77@gmail.com",
//             password: "123123",
//             firstname: "chaitanya",
//             lastname: "kadu",
//         }, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             withCredentials: true,
//         });

//         return result.data;
//     } catch (error) {
//         return 'Signup failed'
//     }
// }