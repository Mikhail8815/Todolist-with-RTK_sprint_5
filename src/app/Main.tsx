import { useAppDispatch, useAppSelector } from "@/common/hooks"
import { CreateItemForm } from "@/common/components/CreateItemForm/CreateItemForm"
import { createTodolistTC } from "@/features/todolists/model/todolists-slice"
import { Todolists } from "@/features/todolists/ui/Todolists/Todolists"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import { Navigate, useNavigate } from "react-router"

export const Main = () => {
  // const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const createTodolist = (title: string) => {
    dispatch(createTodolistTC(title))
  }

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate(Path.Login)
  //   }
  // }, [isLoggedIn])

  // if (!isLoggedIn) {
  //   return <Navigate to={Path.Login} />
  // }

  return (
    <Container maxWidth={"lg"}>
      <Grid container sx={{ mb: "30px" }}>
        <CreateItemForm onCreateItem={createTodolist} />
      </Grid>
      <Grid container spacing={4}>
        <Todolists />
      </Grid>
    </Container>
  )
}
