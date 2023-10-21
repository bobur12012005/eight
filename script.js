function fibonacci(number) {
    let number_one = 0
    let number_two = 1

    for (i = 0; i < number; i++) {
        let current = number_one + number_two
        number_one = number_two
        number_two = current
        console.log(current)
    }
}

let numbers = prompt("Введите число, на котором следует остановиться:")
fibonacci(numbers)



function toSort(array) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let value1 of array) {
            let index1 = array.indexOf(value1)
            let value2 = array[index1 + 1]
            if (value1 > value2) {
                sorted = false
                array[index1] = value2
                array[index1 + 1] = value1
            }
        }
    }
    return array
}

let nums = [1, 2, 3, 5, 367, 6, 94, 3, 6, 6, 3, 54, 7, 2, 65, 7]
console.log(toSort(nums))