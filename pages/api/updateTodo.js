import { UPDATE_TODO_MARKS } from "../../store/server/mutations"
import { gqlClient } from "../../utils/ApolloClient"

export default async function handler(req, res) {
    try {
        const data = await gqlClient.request(UPDATE_TODO_MARKS, {
            todo_id: req.body.todo_id,
            todo_mark: req.body.todo_mark
        })
        res.status(200).json({ data: data })
    } catch (e) {
        console.error('error', e)
        res.status(500).json({ error: `Can't update the todo`})
    }
}