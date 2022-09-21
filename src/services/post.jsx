import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "api/unknown",
        method: "GET",
      }),
    }),
    getByID: builder.query({
      query: (id) => ({
        url: `api/users/${id}`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        return {
          url: `api/users`,
          method: "POST",
          body: newPost,
          header: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    delete: builder.mutation({
      query: (id) => {
        console.log("delete id", id);
        return {
          url: `api/users/${id}`,
          method: "DELETE",
        };
      },
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("updatePostData data", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("updated data", data, id);

        return {
          url: `api/users/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
