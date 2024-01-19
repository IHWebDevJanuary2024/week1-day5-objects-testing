describe("function centsToDecimals", () => {
    it("Should convert value from cents to floating point number with 2 decimals", () => {
        expect(centsToDecimals(105)).toBe(1.05);
        expect(centsToDecimals(53)).toBe(0.53);
    });
    it("Should return `undefined` when the first argument passed is a string",()=>{
        expect(centsToDecimals("fdsfds")).toBeUndefined()
        expect(centsToDecimals("12")).toBeUndefined()
    })
    it("Should return 0 when the first argument is not passed",()=>{
        expect(centsToDecimals()).toBe(0)
    })
});