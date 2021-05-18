export const checkCurrentPosition = (purchased: number) => {
    if (purchased < 500000) {
        return 0;
    } else if (purchased >= 500000 && purchased < 1000000) {
        return 1;
    } else if (purchased >= 1000000 && purchased < 1500000) {
        return 2;
    } else {
        return 3;
    }
};
