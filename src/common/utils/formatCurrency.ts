export const formatCurrency = (currency: number) => {
    return String(currency).replace(/(.)(?=(\d{3})+$)/g, '$1.');
};
