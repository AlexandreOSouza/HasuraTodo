import gql from 'graphql-tag';

export const INSERT_TODO = gql`
    mutation($todo_text: String, $todo_mark: Boolean, $todo_user: String){
        insert_todos(objects: [{ todo_text: $todo_text, todo_mark: $todo_mark, todo_user: $todo_user }]) {
            returning {
                todo_id
            }
        }
    }
`
