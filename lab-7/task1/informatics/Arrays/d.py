n = int(input())
arr = list(map(int, input().split()))
con = 0
for i in range(1, n):
    if(arr[i] > arr[i-1]):
        con += 1
print(con)
