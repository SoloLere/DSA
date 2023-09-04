#TC: O(N * mLog(m)) SC: O(N) where m is the avg length of the words

# Using sorted word as obj key
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}
        for word in strs:
            sortedWord = "".join(sorted(word))
            if sortedWord in obj:
                obj[sortedWord].append(word)
            else:
                obj[sortedWord] = [word]
            
        
        return obj.values()                
        
#TC: O(N * 26) SC: O(N)

# Using a tuple as key (python only allows immutable DS as key)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = defaultdict(list)
        for word in strs:
            arr = [0] * 26
            for letter in word:
                arr[ord(letter) - ord("a")] += 1
                
            obj[tuple(arr)].append(word)
            
        
        return obj.values()                
        