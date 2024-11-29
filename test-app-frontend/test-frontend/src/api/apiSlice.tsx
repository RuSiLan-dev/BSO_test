import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api',
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('token');
        // const ss = getState();
        // if((getState() as any).auth){
        //     const token = (getState() as any).auth.token;
        //     if (token) {
        //       headers.set('Authorization', `Bearer ${token}`);
        //     }
        // }
        //alert(token);
        if (token) 
            headers.set('Authorization', `Bearer ${token}`);
        return headers;
      },
  
   }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({ url: '/auth/local/register', method: 'POST', body: data }),
    }),
    login: builder.mutation({
      query: (data) => ({ url: '/auth/local', method: 'POST', body: data }),
    }),
    getProducts: builder.query({
      query: () => '/products',
    }),
    getCart: builder.query({
      query: () => '/users/me/cart',
    }),
    addToCart: builder.mutation({
      query: (productId) => ({
        url: `/users/me/cart`,
        method: 'POST',
        body: { productId },
      }),
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/users/me/cart/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProductsQuery, useGetCartQuery, useRemoveFromCartMutation } = apiSlice;
