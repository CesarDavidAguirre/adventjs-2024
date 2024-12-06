def organizeShoes(shoes):
    array_of_sizes = []
    shoes_dict = {}
    for shoe in shoes:
        other_pair = "I"
        if shoe["type"] == "I":
            other_pair = "R"

        if shoes_dict.get(shoe["size"]) is None:
            shoes_dict[shoe["size"]] = {}
        if (
            shoes_dict[shoe["size"]].get(other_pair) is not None
            and shoes_dict[shoe["size"]].get(other_pair) > 0
        ):

            array_of_sizes.append(shoe["size"])
            shoes_dict[shoe["size"]][other_pair] -= 1
        else:
            if shoes_dict[shoe["size"]].get(shoe["type"]) is None:
                shoes_dict[shoe["size"]][shoe["type"]] = 0
            shoes_dict[shoe["size"]][shoe["type"]] += 1
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
