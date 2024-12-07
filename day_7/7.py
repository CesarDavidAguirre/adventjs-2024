def fix_packages(packages):
    result = packages
    while "(" in result:
        start = result.rfind("(")
        end = result.find(")", start)
        content = result[start + 1 : end]
        result = result[:start] + content[::-1] + result[end + 1 :]
    return result


print(fix_packages("a(cb)de") == "abcde")
print(fix_packages("a(bc(def)g)h") == "agdefcbh")
print(fix_packages("abc(def(gh)i)jk") == "abcighfedjk")
print(fix_packages("a(b(c))e") == "acbe")
