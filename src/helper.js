export function formatPrice(price){
    return parseFloat(price).toLocaleString('id-ID',{
        style: 'currency',
        currency: 'IDR'
    })
}