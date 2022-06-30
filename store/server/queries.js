import { gql } from "apollo-boost";

 export const GET_INCOMPLETE_TODOS = gql`{
     todos(
         where: {todo_marks: {_eq:false}}
     ){
         todo_id
         todo_text
         todo_mark
         todo_user
     }
 }`