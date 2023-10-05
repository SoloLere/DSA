#TC: O(N) SC: O(N)

# key takeaway: popping an empty array throws error python while it will simply return undefined in JS(sneaky and pernicious)

class Solution:
    def simplifyPath(self, path: str) -> str:
        link = path.split("/")
        stack = []
        for ele in link:
            if ele == "" or ele == ".":
                continue
            elif ele == ".." :
                if stack:
                    stack.pop()
            else:
                stack.append(ele)
                
        return "/" + "/".join(stack)