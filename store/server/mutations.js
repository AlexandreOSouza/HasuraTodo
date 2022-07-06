import gql from 'graphql-tag';

const INSERT_TODO = gql`
    mutation($todo_text: String, $todo_mark: Boolean, $todo_user: String){
        insert_todos(objects: [{ todo_text: $todo_text, todo_mark: $todo_mark, todo_user: $todo_user }]) {
            returning {
                todo_id
            }
        }
    }
`
const UPDATE_TODO_MARKS = gql`
    mutation($todo_id: Int, $todo_mark: Boolean) {
        update_todos(where: {todo_id: {_eq: $todo_id}}, _set: {todo_mark: $todo_mark}) {
            affected_rows
        }
    }
`

const DELETE_TODO = gql`
    mutation($todo_id: Int) {
        delete_todos(where: {todo_id: {_eq: $todo_id}}) {
            affected_rows
        }
    }
`

export { INSERT_TODO, UPDATE_TODO_MARKS, DELETE_TODO }

