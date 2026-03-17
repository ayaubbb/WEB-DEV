from models import Panthera, Bear

def main():
    name = input("Enter name: ")
    year = int(input("Enter year: "))
    color = input("Enter color: ")
    
    p_jump = int(input("Enter panthera`s jump distance: "))
    p_deers = int(input("Enter panthera`s eaten deers: "))
    
    b_babies = int(input("Enter number bear`s of babies: "))
    b_sacrifices = int(input("Enter number bear`s of sacrifices: "))
    
    panthera = Panthera(name, year, color, p_jump, p_deers)
    bear = Bear(name, year, color, b_babies, b_sacrifices)
    
    animals = [panthera, bear]
    
    for a in animals:
        print(a)
        print(f"sound {a.make_sound()}")
        print(f"Legs: {a.number_of_legs()}")

if __name__ == "__main__":
    main()