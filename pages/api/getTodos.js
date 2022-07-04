import { gqlClient } from '../../utils/ApolloClient';
import { GET_INCOMPLETE_TODOS } from "../../store/server/queries";


export default async function handler(req, res) {
    try {
        const user = req.body.user
        const data = await gqlClient.request(GET_INCOMPLETE_TODOS, {
            user: user
        })
        res.status(200).json({ todos: data.todos });
    } catch (e) {
        console.error('error', e)
        res.status(500).json({ error: 'cant get the incomplete todos'})
    }
}
