import { EditableSpan } from "@/common/components"
import { type DomainTodolist } from "@/features/todolists/lib/types"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import styles from "./TodolistTitle.module.css"
import {
  useChangeTodolistTitleMutation,
  useDeleteTodolistMutation,
} from "@/features/todolists/api/todolistsApi.ts"

type Props = {
  todolist: DomainTodolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const { id, title, entityStatus } = todolist

  const [removeTodolist] = useDeleteTodolistMutation()
  const [changeTodolistTitle] = useChangeTodolistTitleMutation()

 
  const deleteTodolist = () => {

  removeTodolist(id)
  
}

  const changeTodolistTitleHandler = (title: string) => {
    changeTodolistTitle({ id, title })
  }

  return (
    <div className={styles.container}>
      <h3>
        <EditableSpan value={title} onChange={changeTodolistTitleHandler} />
      </h3>
      <IconButton onClick={deleteTodolist} disabled={entityStatus === "loading"}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
