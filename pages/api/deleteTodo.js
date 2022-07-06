import { DELETE_TODO } from "../../store/server/mutations";
import { gqlClient } from "../../utils/ApolloClient";

export default async function handler(req, res) {
    try {
        const data = await gqlClient.request(DELETE_TODO, {
            todo_id: req.body.todo_id
        })
        res.status(200).json({ data: data })
    } catch (e) {
        console.error('error', e);
        res.status(500).json({ error: `Can't delete todo` })
    }
}