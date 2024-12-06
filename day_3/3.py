def organizeInventory(inventory):
    inventory_dict = {}
    for item in inventory:
        if inventory_dict.get(item["category"]) is None:
            inventory_dict.setdefault(item["category"], {})
        if inventory_dict[item["category"]].get(item["name"]) is not None:
            inventory_dict[item["category"]][item["name"]] += item["quantity"]
        else:
            inventory_dict[item["category"]][item["name"]] = item["quantity"]
    return inventory_dict


print(
    organizeInventory(
        [
            {"name": "doll", "quantity": 5, "category": "toys"},
            {"name": "car", "quantity": 3, "category": "toys"},
            {"name": "ball", "quantity": 2, "category": "sports"},
            {"name": "car", "quantity": 2, "category": "toys"},
            {"name": "racket", "quantity": 4, "category": "sports"},
        ]
    )
)
