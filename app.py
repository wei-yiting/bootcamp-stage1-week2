# --------------------- problem 1 ------------------------

def calculate(min, max):
    sum = 0
    for num in range(min, max+1):
        sum += num
    return sum


print(calculate(1, 3))  # 你的程式要能夠計算 1+2+3，最後印出 6
print(calculate(4, 8))  # 你的程式要能夠計算 4+5+6+7+8，最後印出 30


# --------------------- problem 2 ------------------------

def avg(data):
    count = data['count']
    employees = data['employees']
    total = 0
    for employee in employees:
        total += employee['salary']
    return total / count


print(avg({
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
}))  # 呼叫 avg 函式


# --------------------- problem 3 ------------------------

def maxProduct(nums):
    max_result = nums[0] * nums[1]  # *** 起始值的設定為第一筆乘出來結果更為正確 ***
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            current_product = nums[i] * nums[j]
            if max_result < current_product:
                max_result = current_product
    return max_result


print(maxProduct([5, 20, 2, 6]))  # 得到 120 因為 20 和 6 相乘得到最大值
print(maxProduct([10, -20, 0, 3]))  # 得到 30 因為 10 和 3 相乘得到最大值
print(maxProduct([1, -10]))  # *** 沒考慮到的邊界條件 ***

# --------------------- problem 4 ------------------------


def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            sum = nums[i] + nums[j]
            if sum == target:
                return [i, j]


result = twoSum([2, 11, 7, 15], 9)
print(result)  # show [0, 2] because nums[0]+nums[2] is 9


# --------------------- problem 5 ------------------------

def maxZeros(nums):
    index_of_1 = [-1]
    for i in range(len(nums)):
        if nums[i] == 1:
            index_of_1.append(i)
    index_of_1.append(len(nums))

    max_interval = 0
    for i in range(len(index_of_1) - 1):
        current_interval = index_of_1[i+1] - index_of_1[i] - 1
        if max_interval < current_interval:
            max_interval = current_interval
    return max_interval


print(maxZeros([0, 1, 0, 0]))  # 得到 2
print(maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]))  # 得到 4
print(maxZeros([1, 1, 1, 1, 1]))  # 得到 0
