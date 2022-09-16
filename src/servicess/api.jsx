import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/",
  }),

  tagTypes: ["Student"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => "api/unknown",
      providesTags: ["Student"],
    }),
    // getByID: builder.query({
    //   query: (id) => "api/users/" + id,
    // }),
    addStudent: builder.mutation({
      query: (newPost) => ({
        url: `api/users`,
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...student }) => ({
        url: `api/users/${id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `api/users/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Student"],
    }),

    // }),
  }),
});
export const {
  useGetAllQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteMutation,
} = studentsApi;
