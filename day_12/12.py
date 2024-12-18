import re


def calculate_price(ornaments: str) -> int:
    if not re.match(r"^[*o^#@]+$", ornaments):
        return None
    ornaments_values = {
        "*": 1,
        "o": 5,
        "^": 10,
        "#": 50,
        "@": 100,
    }
    acc = 0
    for index, ornament in enumerate(ornaments):
        ornament_value = (
            ornaments_values[ornaments[index + 1]] if index < len(ornaments) - 1 else 0
        )
        last_ornament_value = ornaments_values[ornament]
        if ornament_value > last_ornament_value:
            acc -= last_ornament_value
        else:
            acc += last_ornament_value
    return acc


print(calculate_price("***"))  # 3   (1 + 1 + 1)
print(calculate_price("*o"))  # 4   (5 - 1)
print(calculate_price("o*"))  # 6   (5 + 1)
print(calculate_price("*o*"))  # 5  (-1 + 5 + 1)
print(calculate_price("**o*"))  # 6  (1 - 1 + 5 + 1)
print(calculate_price("o***"))  # 8   (5 + 3)
print(calculate_price("*o@"))  # 94  (-5 - 1 + 100)
print(calculate_price("*#"))  # 49  (-1 + 50)
print(calculate_price("@@@"))  # 300 (100 + 100 + 100)
print(calculate_price("#@"))  # 50  (-50 + 100)
print(calculate_price("#@Z@"))  # None (Z es desconocido)
