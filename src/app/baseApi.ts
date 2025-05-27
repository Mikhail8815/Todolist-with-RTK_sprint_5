import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AUTH_TOKEN } from "@/common/constants"
import { handleError } from "@/common/utils/handleError"

export const baseApi = createApi({
  reducerPath: "todolistsApi",
  tagTypes: ["Todolists", "Tasks"],
    refetchOnReconnect: true,
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: "https://social-network.samuraijs.com/api/1.1",
      credentials: 'include',
      // baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("API-KEY", import.meta.env.VITE_API_KEY)
        headers.set("Authorization", `Bearer ${localStorage.getItem(AUTH_TOKEN)}`)
      },
    })(args, api, extraOptions)

    // if (result.error) {
    //   if (result.error.status === "FETCH_ERROR" || result.error.status === "PARSING_ERROR") {
    //     api.dispatch(setAppErrorAC({ error: result.error.error }))
    //   }
    //   if (result.error.status === 403) {
    //     api.dispatch(setAppErrorAC({ error: "403 Forbidden Error. Check API-KEY" }))
    //   }
    //   if (result.error.status === 400 || result.error.status === 500) {
    //     // ✅ 3. Type Predicate
    //     if (isErrorWithMessage(result.error.data)) {
    //       api.dispatch(setAppErrorAC({ error: result.error.data.message }))
    //     } else {
    //       api.dispatch(setAppErrorAC({ error: JSON.stringify(result.error.data) }))
    //     }
    //   }
    // }

    // Сверху тот же самый код, только написанный через if

    handleError(api, result)

    return result
  },
  endpoints: () => ({}),
})
