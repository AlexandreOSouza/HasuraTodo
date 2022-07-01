import { useApolloClient } from '@apollo/client';
import { GET_INCOMPLETE_TODOS } from "../../store/server/queries";
import Client from "../../utils/ApolloClient";


export default async function handler(req, res) {
    try {
        const data = await Client.query({query: GET_INCOMPLETE_TODOS})
        res.status(200).json({ todos: data });
    } catch (e) {
        console.error('error', e)
        res.status(500).json({ error: 'cant get the incomplete todos'})
    }
}