x = int(input())
d = int(input())

count = 0
xd = str(abs(x)) 

for _ in range(len(xd)):
    digit = x % 10  
    if digit == d:
        count += 1
    x //= 10        

print(count)