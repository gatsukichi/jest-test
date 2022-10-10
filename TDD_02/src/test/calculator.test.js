const {Calculator} = require("../calculator")

describe("Calculator",()=>{
    let cal = null
    beforeEach(()=>{
        cal = new Calculator();
    })
    it("add",()=>{
        expect(cal.display()).toBe(0)
        cal.add(5)
        expect(cal.display()).toBe(5)
    
        cal.add(7)
        expect(cal.display()).toBe(12)
        
        cal.add(2)
        expect(cal.display()).not.toBe(15)
    })
    
    
    it("subtract",()=>{
        expect(cal.display()).toBe(0)
        cal.subtract(5)
        expect(cal.display()).toBe(-5)
    
        cal.subtract(7)
        expect(cal.display()).toBe(-12)
        
        cal.subtract(2)
        expect(cal.display()).not.toBe(15)
    })
    
    it("multiply",()=>{
        cal.set(2)
        expect(cal.display()).not.toBe(0)
        cal.multiply(5)
        expect(cal.display()).toBe(10)
    
        cal.multiply(7)
        expect(cal.display()).toBe(70)
        
        cal.multiply(0.5)
        expect(cal.display()).not.toBe(34)
    })
    
    describe("divide",()=>{
        it("divide",()=>{
            cal.set(15)
            expect(cal.display()).not.toBe(0)
            cal.divide(3)
            expect(cal.display()).toBe(5)
        
            cal.divide(2)
            expect(cal.display()).toBe(2.5)
            
            cal.divide(2)
            expect(cal.display()).toBe(1.25)
        })
        it("0 / 0 = NaN",()=>{
            cal.divide(0)
            expect(cal.display()).toBe(NaN)
            // expect(cal.display()).toBeNaN()
        })
        it("1 / 0 = Infinity",()=>{
            cal.set(1)
            cal.divide(0)
            expect(cal.display()).toBe(Infinity)
        })
        it("4 / 4 = 1 ",()=>{
            cal.set(4)
            cal.divide(4)
            expect(cal.display()).toBe(1)
        })
    })
    
})
