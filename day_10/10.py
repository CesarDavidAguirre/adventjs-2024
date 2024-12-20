def compile(instructions):
    registers = {}
    index = 0
    while index < len(instructions):
        command, *args = instructions[index].split(" ")
        if command == "MOV":
            registers[args[1]] = (
                int(args[0]) if args[0].lstrip("-").isdigit() else registers[args[0]]
            )
        elif command == "INC":
            registers[args[0]] += 1
        elif command == "DEC":
            registers[args[0]] -= 1
        elif command == "JMP":
            if registers[args[0]] == 0:
                index = int(args[1])
                continue
        index += 1
    return registers["A"]


print(compile(["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"]))
