import { getLength } from "../src/getLength";

test('it should return zero when passed number',()=>{
    const result=getLength(Math.random());
    expect(result).toBe(0);
})
test('it should return zero when passed undefined as input ',()=>{
    const result=getLength();
    expect(result).toBe(0);
})