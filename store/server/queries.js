import gql from 'graphql-tag';

 export const GET_INCOMPLETE_TODOS = gql`{
    todos(where: {todo_mark: {_eq: false}}) {
        todo_id
        todo_mark
        todo_text
        todo_user
    }
 }`