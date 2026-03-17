def double_char(str):
  result = ""
  for char in str:
    result += char * 2
  return result

def count_hi(str):
  count = 0
  for i in range(len(str) - 1):
    if str[i:i+2] == 'hi':
        count += 1
  return count

def cat_dog(str):
  cats = 0
  dogs = 0
  for i in range(len(str) - 2):
    if str[i:i+3] == 'cat':
      cats += 1
    if str[i:i+3] == 'dog':
      dogs += 1
  return cats == dogs

def count_code(str):
  count = 0
  for i in range(len(str) - 3):
    if str[i:i+2] == 'co' and str[i+3] == 'e':
      count += 1
  return count

def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return a.endswith(b) or b.endswith(a)

def xyz_there(str):
  if str[:3] == "xyz":
    return True
  for i in range(1, len(str) - 2):
    if str[i:i+3] == "xyz" and str[i-1] != ".":
      return True
  return False