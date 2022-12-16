

export const getLength = (val) => {
     total = 0;
    if(!val){
        return 0
    }
    for (let i = 0; i < val.length; i++) {
        total++;
    }
    return total;
};




console.log(getLength(5));