import gql from 'graphql-tag';

 export const GET_INCOMPLETE_TODOS = gql`
    query GetTodos($user: String) {
        todos(order_by: {todo_id: asc}, where: {todo_user: {_eq: $user}}) {
            todo_id
            todo_mark
            todo_text
            todo_user
        }
    }
 `