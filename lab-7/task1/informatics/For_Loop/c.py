import math
a = int(input())
b = int(input())

start_root = math.ceil(math.sqrt(a))
end_root = math.floor(math.sqrt(b))

for i in range(start_root, end_root + 1):
    print(i * i, end=' ')