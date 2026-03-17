x = input()
reversed_str = ""

for i in range(len(x) - 1, -1, -1):
    reversed_str += x[i]

print(int(reversed_str))