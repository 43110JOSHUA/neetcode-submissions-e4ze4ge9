class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        courses = {i:[] for i in range(numCourses)}
        
        # Initalize courses
        for crs, pre in prerequisites:
            courses[crs].append(pre)

        # run dfs
        visited = set()
        def dfs(crs):
            if crs in visited:
                return False
            if courses[crs] == []:
                return True
            
            visited.add(crs)
            for pre in courses[crs]:
                if not dfs(pre):
                    return False   
            visited.remove(crs)
            courses[crs] = []
            return True
        
        for crs in range(numCourses):
            if not dfs(crs):
                return False
        return True