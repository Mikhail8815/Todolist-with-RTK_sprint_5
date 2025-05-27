import { EditableSpan } from "@/common/components"
import { type DomainTodolist } from "@/features/todolists/model/todolists-slice"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import styles from "./TodolistTitle.module.css"
import {
  todolistsApi,
  useChangeTodolistTitleMutation,
  useDeleteTodolistMutation,
} from "@/features/todolists/api/todolistsApi.ts"
import { useAppDispatch } from "@/common/hooks"
import { RequestStatus } from "@/common/types"

type Props = {
  todolist: DomainTodolist
}

export const TodolistTitle = ({ todolist }: Props) => {
  const { id, title, entityStatus } = todolist

  const [removeTodolist] = useDeleteTodolistMutation()
  const [changeTodolistTitle] = useChangeTodolistTitleMutation()

  const dispatch = useAppDispatch()
 
  // Без optimistic update

  // const changeTodolistStatus = (entityStatus: RequestStatus) => {
  //   dispatch(
  //     todolistsApi.util.updateQueryData("getTodolists", undefined, (state) => {
  //       const todolist = state.find((todolist) => todolist.id === id)
  //       if (todolist) {
  //         todolist.entityStatus = entityStatus
  //       }
  //     }),
  //   )
  // }

  // const deleteTodolist = async () => {
  //   changeTodolistStatus("loading")
  //   removeTodolist(id)
  //     .unwrap()
  //     .catch(() => {
  //       changeTodolistStatus("idle")
  //     })
  // }


  // С optimistic update

  const deleteTodolist = () => {
  // const patchResult = dispatch(
  //   todolistsApi.util.updateQueryData('getTodolists', undefined, state => {
      //Дизэйбл тудулиста

      // const todolist = state.find(todolist => todolist.id === id)
      // if (todolist) {
      //   todolist.entityStatus = 'loading'
      // }
      
      // Удаление тудулиста
  //     const index = state.findIndex(todolist => todolist.id === id)
  //           if (index !== -1) {
  //             state.splice(index, 1)
  //           }
  //   })
  // )
  // try {
  //   const res = await removeTodolist("id")
  //   if (res.error) {
  //     patchResult.undo()
  //   }
  // } catch {
  //   patchResult.undo()
  // }

  removeTodolist(id)
  
  // равносильная запись
  // dispatch(todolistsApi.endpoints.deleteTodolist.initiate(id))
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
