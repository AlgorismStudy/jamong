t = int(input())

for i in range(t):
    maxs = int(-1e9)
    n = int(input())
    tot = []
    x = list(map(int, input().split()))
    y = list(map(int, input().split()))
    tot.append(x)
    tot.append(y)
    dp1 = [0] * (n+1)
    dp2 = [0] * (n+1)

    # x 부터 시작
    dp1[0] = x[0]
    dp1[1] = dp1[0] + y[1]

    dp2[0] = y[0]
    dp2[1] = dp2[0] + x[1]

    for i in range(2, n):
        dp1[i] = max(dp1[i-2],  dp2[i-1]) + x[i]
        dp2[i] = max(  dp2[i-2],dp1[i-1]) + y[i]

    print(max(dp1[n-1], dp2[n-1]))
    print(dp1)
    print(dp2)