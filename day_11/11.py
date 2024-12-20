def decode_filename(filename: str) -> str:
    index_1 = filename.index("_")
    index_2 = filename.rfind(".")
    return filename[index_1 + 1 : index_2]


print(decode_filename("42_chimney_dimensions.pdf.hack2023"))
print(decode_filename("987654321_elf-roster.csv.tempfile"))
print(decode_filename("2023122512345678_sleighDesign.png.grinchwa"))
