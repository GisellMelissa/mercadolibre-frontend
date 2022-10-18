import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const site = 'MLA'

// export const meliApi = createApi({
// 	reducerPath: 'meliApi',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: `https://api.mercadolibre.com/sites/${site}`
// 	}),
// 	endpoints: (builder) => ({
// 		searchProducts: builder.mutation<any, string>({
// 			query: (term) => `/search?q=${term}`
// 		}),
// 		obtainSearchedProducts: builder.query<[], any>({
// 			query: (term) => `/search?q=${term}`
// 		}),
// 		getSelectedProduct: builder.mutation<{body: {id: string}}[], any>({
// 			query: (id) => `https://api.mercadolibre.com/items?ids=${id}`
// 		}),
// 		obtainSelectedProducts: builder.query<{body: {}}[], any>({
// 			query: (id) => `https://api.mercadolibre.com/items?ids=${id}`
// 		})
// 	})
// })

export const meliApi = createApi({
	reducerPath: 'meliApi',
	baseQuery: fetchBaseQuery({
		// baseUrl: `https://api.mercadolibre.com/sites/${site}`
		baseUrl: `http://localhost:5000/api/items`
	}),
	endpoints: (builder) => ({
		searchProducts: builder.mutation<any, string>({
			query: (term) => `http://localhost:5000/api/items?q=${term}`
		}),
		obtainSearchedProducts: builder.query<[], any>({
			query: (term) => `http://localhost:5000/api/items?q=${term}`
		}),
		getSelectedProduct: builder.mutation<{item: {id: string}}, any>({
			query: (id) => `http://localhost:5000/api/items/${id}`
		}),
		obtainSelectedProducts: builder.query<{item: {}}, any>({
			query: (id) => `http://localhost:5000/api/items/${id}`
		})
	})
})


export const { useSearchProductsMutation, useObtainSearchedProductsQuery, useGetSelectedProductMutation, useObtainSelectedProductsQuery } = meliApi
