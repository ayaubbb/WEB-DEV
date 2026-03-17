class Animal:
    def __init__(self, name, year, color):
        self.name = name
        self.year = year
        self.color = color
        self.voice = "no_voice_yet"
        
    def make_sound(self):
        return f"{self.name} says {self.voice}"
    
    def number_of_legs(self):
        return "Animals usually have 4 legs"
    
    def __str__(self):
        return f"This is {self.name}. It is {self.year} years old. It is {self.color}."

class Panthera(Animal):
    def __init__(self, name, year, color, distance_of_jump, eaten_deer):
        super().__init__(name, year, color)
        self.voice = "Roar"
        self.distance_of_jump = distance_of_jump
        self.eaten_deer = eaten_deer
        
    def make_sound(self):
        return f"The Panthera roars: {self.voice}"
    
    def get_jump_info(self):
        return f"Jump distance: {self.distance_of_jump}m"
    
    def number_of_legs(self):
        return "it have 4 legs for jump"
    
    def __str__(self):
        return super().__str__() + f" Jump: {self.distance_of_jump}m. Eaten deers: {self.eaten_deer}."

class Bear(Animal):
    def __init__(self, name, year, color, num_of_babies, num_of_sacrifices):
        super().__init__(name, year, color)
        self.voice = "Growl"
        self.num_of_babies = num_of_babies
        self.num_of_sacrifices = num_of_sacrifices
        
    def make_sound(self):
        return f"The Bear growls: {self.voice}!"
    
    def number_of_legs(self):
        return "it have 4 legs but it can stay with 2 legs"
    
    def __str__(self):
        return super().__str__() + f" Babies: {self.num_of_babies}. Sacrifices: {self.num_of_sacrifices}."
