def prepare_gifts(gifts):
    return sorted(set(gifts))


print(prepare_gifts([3, 1, 2, 3, 4, 2, 5]))  # [1, 2, 3, 4, 5]
print(prepare_gifts([6, 5, 5, 5, 5]))  # [5, 6]
print(prepare_gifts([]))  # []
