import { gqlClient } from '../../utils/ApolloClient';
import { INSERT_TODO } from '../../store/server/mutations'

export default async function handler(req, res) {
    try {
        const data = await gqlClient.request(INSERT_TODO, {
            todo_text: req.body.todo_text,
            todo_mark: req.body.todo_mark,
            todo_user: req.body.todo_user
        })
        res.status(200).json({ data: data})
    } catch (e) {
        console.error('error', e)
        res.status(500).json({ error: `Can't insert a new TODO` });
    }
}