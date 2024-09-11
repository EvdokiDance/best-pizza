

export const calcCheckoutTotalPrice = (totalAmount: number, vat: number, deliveryPrice: number) => {

    const vatPrice = (totalAmount * vat) / 100;
    
     return vatPrice + deliveryPrice;   
}