#Basic Data TypesLists
if __name__ == '__main__':
    N = int(input())
    res = []
    for _ in range(N):
        command = input().split()
        cmd = command[0]
        args = command[1:]
        
        if cmd == "insert":
            res.insert(int(args[0]), int(args[1]))
        elif cmd == "print":
            print(res)
        elif cmd == "remove":
            res.remove(int(args[0]))
        elif cmd == "append":
            res.append(int(args[0]))
        elif cmd == "sort":
            res.sort()
        elif cmd == "pop":
            res.pop()
        elif cmd == "reverse":
            res.reverse()
