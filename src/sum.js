export const sum = (arr) => {
     total = 0;
    if (!arr) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};
