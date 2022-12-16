const val = "azer";

const getLength = (val) => {
    let total = 0;
    for (let i = 0; i < val.length; i++) {
        total++;
    }
    return total;
};

console.log(getLength(val));
