def draw_race(indices, length):
    lane = "~" * length
    result = []
    for i, position in enumerate(indices):
        build_lane = " " * (len(indices) - i - 1)
        if position == 0:
            build_lane += f"{lane} /{i + 1}"
        else:
            lane_with_reno = list(lane)
            real_position = position if position > 0 else length + position
            lane_with_reno[real_position] = "r"
            build_lane += "".join(lane_with_reno) + f" /{i + 1}"
        result.append(build_lane)
    return "\n".join(result)


print(draw_race([0, 5, -3], 10))
print(draw_race([2, -1, 0, 5], 8))
print(draw_race([3, 7, -2], 12))
