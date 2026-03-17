first_ans = int(input())
second_ans = int(input())

if((first_ans == 1) and (second_ans == 1)):
    print("YES")
elif((first_ans == 1) and (second_ans != 1)):
    print("NO")
elif((first_ans != 1) and (second_ans == 1)):
    print("NO")   
elif((first_ans != 1) and (second_ans != 1)):
    print("YES")