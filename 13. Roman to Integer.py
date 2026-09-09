class Solution(object):
    def romanToInt(self, s):
        romanValues = {
            'I':1, 'V':5, 'X':10, 'L':50,
            'C':100, 'D':500, 'M':1000
        }

        valueOrder = {
            'I':1, 'V':2, 'X':3, 'L':4,
            'C':5, 'D':6, 'M':7
        }

        r = []

        for index, c in enumerate(s):
            if index >= 1 and valueOrder[s[index - 1]] < valueOrder[c]:
                r.append(romanValues[c] - romanValues[s[index - 1]])
                r[index - 1] = 0
                
            else:
                r.append(romanValues[c])

        return sum(r)
