
class Calculator {
    // private 써보기. 신문법
    #value = 0

    set(num){
        this.#value = num;
    }
    
    clear(){
        this.#value = 0;
    }

    add(num){
        this.#value += num;
    }

    subtract(num){
        this.#value -= num;
    }

    multiply(num){
        this.#value *= num;
    }

    divide(num){
        this.#value /= num;
    }

    display(){
        return this.#value
    }
}

module.exports = {
    Calculator
}