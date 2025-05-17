import { TaskStatus } from "@/common/enums"
import type { DomainTodolist } from "@/features/todolists/model/todolists-slice"
import { TaskItem } from "./TaskItem/TaskItem"
import List from "@mui/material/List"
import { useGetTasksQuery } from "@/features/todolists/api/tasksApi.ts"
import { TasksSkeleton } from "./TasksSkeleton/TasksSkeleton"
import { useAppDispatch } from "@/common/hooks"
import { setAppErrorAC } from "@/app/app-slice"
import { useEffect } from "react"

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {

  const dispatch = useAppDispatch()

  const { id, filter } = todolist

  const { data, isLoading, isError, error } = useGetTasksQuery(id)



  let filteredTasks = data?.items
  if (filter === "active") {
    filteredTasks = filteredTasks?.filter((task) => task.status === TaskStatus.New)
  }
  if (filter === "completed") {
    filteredTasks = filteredTasks?.filter((task) => task.status === TaskStatus.Completed)
  }

  if (isLoading) {
    return <TasksSkeleton/>
  }
  
  return (
    <>
      {filteredTasks?.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <List>{filteredTasks?.map((task) => <TaskItem key={task.id} task={task} todolist={todolist} />)}</List>
      )}
    </>
  )
}
