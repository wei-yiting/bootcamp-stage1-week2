// ---------------- problem 1 --------------------

function calculate(min, max) {
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculate(1, 3)); // 你的程式要能夠計算 1+2+3，最後印出 6
console.log(calculate(4, 8)); // 你的程式要能夠計算 4+5+6+7+8，最後印出 30


// ---------------- problem 2 --------------------

function avg(data) {
    count = data['count'];
    employees = data['employees'];
    salaryArray = employees.map(person => person['salary']);
    let total = 0;
    for (let salary of salaryArray) {
        total += salary;
    }
    return total / count;
}

console.log(avg({
    "count": 3,
    "employees": [
        {
            "name": "John",
            "salary": 30000
        },
        {
            "name": "Bob",
            "salary": 60000
        },
        {
            "name": "Jenny",
            "salary": 50000
        }
    ]
})); // 呼叫 avg 函式


// ---------------- problem 3 --------------------

function maxProduct(nums) {
    let maxResult = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            currentProduct = nums[i] * nums[j];
            if (maxResult < currentProduct) {
                maxResult = currentProduct;
            }
        }
    }
    return maxResult;
}
console.log(maxProduct([5, 20, 2, 6])); // 得到 120 因為 20 和 6 相乘得到最大值
console.log(maxProduct([10, -20, 0, 3])); // 得到 30 因為 10 和 3 相乘得到最大值


// ---------------- problem 4 --------------------

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}
result = twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9

// ---------------- problem 5 --------------------

function maxZeros(nums) {
    let indexOfOne = [-1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            indexOfOne.push(i);
        }
    }
    indexOfOne.push(nums.length);

    let maxInterval = 0;
    for (let i = 0; i < indexOfOne.length - 1; i++) {
        currentInterval = indexOfOne[i + 1] - indexOfOne[i] - 1;
        if (maxInterval < currentInterval) {
            maxInterval = currentInterval;
        }
    }
    return maxInterval;
}

console.log(maxZeros([0, 1, 0, 0])); // 得到 2
console.log(maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0])); // 得到 4
console.log(maxZeros([1, 1, 1, 1, 1])) // 得到 0