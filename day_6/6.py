def in_box(box):
    return all(row[0] == "#" and row[-1] == "#" for row in box) and any(
        "*" in row for row in box[1:-1]
    )


print(in_box(["###", "#*#", "###"]))  # ➞ true
print(in_box(["####", "#* #", "#  #", "####"]))  # ➞ true
print(in_box(["#* #", "#  #", "####"]))  # ➞ false
print(in_box(["*####", "#   #", "#  #*", "####"]))  # ➞ false
print(in_box(["#####", "#   #", "#   #", "#   #", "#####"]))  # ➞ false
