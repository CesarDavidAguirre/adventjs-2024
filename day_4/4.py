def createXmasTree(height, ornament):
    tree = ""
    for i in range(height):
        tree += (
            "_" * (height - i - 1)
            + ornament * (2 * i + 1)
            + "_" * (height - i - 1)
            + "\n"
        )

    wood = "_" * (height - 1) + "#" + "_" * (height - 1)
    return tree + wood + "\n" + wood


print(createXmasTree(5, "*"))
