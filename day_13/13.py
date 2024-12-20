def is_robot_back(moves: str) -> bool | list[int]:
    robot = {"x": 0, "y": 0}
    last_move = {"L": False, "R": False, "U": False, "D": False}

    def move_left(index):
        robot["x"] -= 1
        last_move["L"] = True
        return index + 1

    def move_right(index):
        robot["x"] += 1
        last_move["R"] = True
        return index + 1

    def move_up(index):
        robot["y"] += 1
        last_move["U"] = True
        return index + 1

    def move_down(index):
        robot["y"] -= 1
        last_move["D"] = True
        return index + 1

    def move_star(index):
        next_move = moves[index + 1]
        moves_fn[next_move](index)
        moves_fn[next_move](index)
        return index + 2

    def move_question(index):
        next_move = moves[index + 1]
        if not last_move[next_move]:
            moves_fn[next_move](index)
        return index + 2

    moves_fn = {
        "L": move_left,
        "R": move_right,
        "U": move_up,
        "D": move_down,
        "*": move_star,
        "?": move_question,
    }
    moves = moves.replace("!U", "D")
    moves = moves.replace("!D", "U")
    moves = moves.replace("!L", "R")
    moves = moves.replace("!R", "L")
    index = 0
    while index < len(moves):
        move = moves[index]
        index = moves_fn[move](index)

    return True if robot["x"] == 0 and robot["y"] == 0 else [robot["x"], robot["y"]]


print(is_robot_back("R"))
print(is_robot_back("RL"))
print(is_robot_back("RLUD"))
print(is_robot_back("*RU"))
print(is_robot_back("R*U"))
print(is_robot_back("LLL!R"))
print(is_robot_back("R?R"))
print(is_robot_back("U?D"))
print(is_robot_back("R!L"))
print(is_robot_back("U!D"))
print(is_robot_back("R?L"))
print(is_robot_back("U?U"))
print(is_robot_back("*U?U"))
print(is_robot_back("U?D?U"))
print(is_robot_back("R!U?U"))
print(is_robot_back("UU!U?D"))
