export const productList:Product[] = [
    {id: 1, name: 'MasColor', price: 10, description: 'Detergente para ropa de color.'},
    {id: 2, name: '123', price: 8, description: 'Detergente para todo tipo de ropa.'},
    {id: 3, name: 'Persil', price: 9},
    {id: 4, name: 'Lavandina', price: 11, description: 'Limpia pisos con olor a lavanda.'},
    {id: 5, name: 'Pinol', price: 15, description: 'Multilimpiador desinfectante.'}

]

export interface Product {
    id: number | string,
    name: string,
    price: number,
    description?: string
}