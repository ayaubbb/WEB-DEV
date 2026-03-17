def sleep_in(weekday, vacation):
    if not weekday or vacation:
        return True
    else:
        return False
    
def monkey_trouble(a_smile, b_smile):
  return a_smile == b_smile

def sum_double(a, b):
  sum = a + b
  if a == b:
    sum = sum * 2
  return sum

def diff21(n):
  diff = abs(n - 21)
  if n > 21:
    return diff * 2
  else:
    return diff

def parrot_trouble(talking, hour):
  if talking and (hour < 7 or hour > 20):
    return True
  else:
    return False

def makes10(a, b):
    return (a == 10 or b == 10 or (a + b) == 10)

def near_hundred(n):
  return abs(100 - n) <= 10 or abs(200 - n) <= 10

def pos_neg(a, b, negative):
  if negative:
    return a < 0 and b < 0
  else:
    return (a < 0 and b > 0) or (a > 0 and b < 0)

def not_string(str):
  if str.startswith("not"):
    return str
  else:
    return "not " + str

def missing_char(str, n):
  front = str[:n]
  back = str[n+1:]
  return front + back

def front_back(str):
  if len(str) <= 1:
    return str
  mid = str[1:-1]
  return str[-1] + mid + str[0]

def front3(str):
  front = str[:3]
  return front * 3

