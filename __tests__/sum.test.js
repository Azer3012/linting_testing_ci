import { sum } from "../src/sum";

test('return 0 when array is emty',()=>{
    const result=sum([]);
    expect(result).toBe(0)
})
test('return 0 when function is not argument',()=>{
    const result=sum();
    expect(result).toBe(0)
})