#Find Angle MBC math
import math

ab = int(input())
bc = int(input())

angle_rad = math.atan2(ab, bc)
angle_deg = math.degrees(angle_rad)

print(f"{round(angle_deg)}{chr(176)}")