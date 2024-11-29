def is_pair(number: int) -> bool:
    return number % 2 == 0

def is_even(number: int) -> bool:
    return number % 2 == 0

def get_int(string: str = None) -> int:
    while True: 
        try:
            return int(input("Enter a number: "))
        except ValueError:
            print("Invalid input. Please enter a number.")

def main(sample: int = None):
    if not sample:
        sample = get_int()

    if is_even(sample):
        if is_pair(sample):
            

    if is_even(sample):
        print(f"{sample} is pair and even.")
    else: 
        print(f"{sample} is not pair or even.")

if __name__ == "__main__":
    for i in range(50):
        main(i)