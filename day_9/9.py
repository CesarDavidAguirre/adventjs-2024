from typing import List, Literal


def move_train(
    board: List[str], mov: Literal["U", "D", "R", "L"]
) -> Literal["none", "crash", "eat"]:
    result = {"·": "none", "*": "eat", "o": "crash"}
    for i, row in enumerate(board):
        if "@" in row:
            train_y = i
            train_x = row.index("@")
            break
    next_move = {
        "U": [train_y - 1, train_x],
        "D": [train_y + 1, train_x],
        "L": [train_y, train_x - 1],
        "R": [train_y, train_x + 1],
    }
    next_y, next_x = next_move[mov]
    if next_y < 0 or next_x < 0 or next_y >= len(board) or next_x >= len(board[next_y]):
        return result["o"]
    return result[board[next_y][next_x]]


print(move_train(["·····", "*····", "@····", "o····", "o····"], "U"))
print(move_train(["·····", "*····", "@····", "o····", "o····"], "D"))
print(move_train(["·····", "*····", "@····", "o····", "o····"], "L"))
print(move_train(["·····", "*····", "@····", "o····", "o····"], "R"))
