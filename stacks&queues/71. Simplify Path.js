// TC: O(N) SC: O(N)

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let link = path.split("/").filter(el => el != "" && el != ".")
  // console.log(link)
  let stack = []
  for (let i of link){
      if (i == ".."){
        stack.pop()  
      }
      else stack.push(i)
      
  }
  
  return "/" + stack.join("/")
};