import { apiSlice } from "../api/apiSlice";


export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserOrders: builder.query({
            query: userId => `/user/${userId}/orders`,
        }),
        postUserOrder: builder.mutation({
            query: ({ userId, orderItems }) => ({
                url: `/user/${userId}/order`,
                method: 'POST',
                body: { orderItems },
            }),
        }),
    }),
});

export const { useGetUserOrdersQuery, usePostUserOrderMutation } = ordersApiSlice;