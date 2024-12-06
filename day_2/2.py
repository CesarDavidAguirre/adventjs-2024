def createFrame(names):
    max_length = 0
    for name in names:
        if len(name) > max_length:
            max_length = len(name)
    box = ""
    for name in names:
        box += "* " + name + " " * (max_length - len(name)) + "*\n"

    return "*" * (max_length + 4) + "\n" + box + "*" * (max_length + 4)


print(createFrame(["midu", "madeval", "educalvolpz"]))
