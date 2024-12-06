def organizeShoes(shoes):
    array_of_sizes = []
    shoes_dict = {}
    for shoe in shoes:
        size = shoe["size"]
        type = shoe["type"]
        other_pair = "I" if (type == "R") else "R"
        shoes_dict.setdefault(size, {})
        shoes_dict[size].setdefault(type, 0)
        shoes_dict[size].setdefault(other_pair, 0)
        if shoes_dict[size].get(other_pair) > 0:
            array_of_sizes.append(size)
            shoes_dict[size][other_pair] -= 1
        else:
            shoes_dict[size][type] += 1
    return array_of_sizes


print(
    organizeShoes(
        [
            {"type": "I", "size": 38},
            {"type": "R", "size": 38},
            {"type": "R", "size": 42},
            {"type": "I", "size": 41},
            {"type": "I", "size": 42},
        ]
    )
)
