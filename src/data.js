export const codes = [
    // FizzBuzz in all languages
    {
      id: 1,
      title: 'FizzBuzz',
      code: 'for(let i=1; i<=100; i++) { console.log(i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i) }',
      difficulty: 'easy',
      language: 'JavaScript',
    },
    {
      id: 2,
      title: 'FizzBuzz',
      code: 'for i in range(1, 101):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)',
      difficulty: 'easy',
      language: 'Python',
    },
    {
      id: 3,
      title: 'FizzBuzz',
      code: '#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 100; i++) {\n        if (i % 3 == 0 && i % 5 == 0)\n            cout << "FizzBuzz\\n";\n        else if (i % 3 == 0)\n            cout << "Fizz\\n";\n        else if (i % 5 == 0)\n            cout << "Buzz\\n";\n        else\n            cout << i << "\\n";\n    }\n    return 0;\n}',
      difficulty: 'easy',
      language: 'C++',
    },
  
    // Two Sum in all languages
    {
      id: 4,
      title: 'Two Sum',
      code: 'function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}',
      difficulty: 'medium',
      language: 'JavaScript',
    },
    {
      id: 5,
      title: 'Two Sum',
      code: 'def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []',
      difficulty: 'medium',
      language: 'Python',
    },
    {
      id: 6,
      title: 'Two Sum',
      code: '#include <unordered_map>\n#include <vector>\nusing namespace std;\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> map;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (map.find(complement) != map.end()) {\n            return {map[complement], i};\n        }\n        map[nums[i]] = i;\n    }\n    return {};\n}',
      difficulty: 'medium',
      language: 'C++',
    },

    // Palindrome ---------------
    {
        id: 7,
        title: 'Palindrome',
        code: 'class Solution(object): def isPalindrome(self, x): \nif x < 0:\n return False \noriginal = x\n   reversed_num = 0  \nwhile x > 0:\n last_digit = x % 10 \nreversed_num = reversed_num * 10 + last_digit \n x = x // 10 \n return original == reversed_num',
        difficulty: 'easy',
        language: 'Python',
    },
  
    // Add more problems like Binary Search, Knapsack Problem, etc., for all languages
    {
      id: 8,
      title: 'Roman To Integer',
      code: `class Solution(object): \n def romanToInt(self, s): \n roman_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000} \n total = 0 \n prev_value = 0 \n for char in reversed(s): \n curr_value = roman_dict[char] \n if curr_value < prev_value: \n total -= curr_value \n else: \n total += curr_value \n prev_value = curr_value \n return total`,
      difficulty: 'easy',
      language: 'Python',
  },
  {
    id: 9,
    title: "Roman To Integer",
    code: `#include <iostream>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    int romanToInt(string s) {\n        unordered_map<char, int> roman_dict = {\n            {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},\n            {'C', 100}, {'D', 500}, {'M', 1000}\n        };\n        int total = 0;\n        int prev_value = 0;\n        \n        for (int i = s.size() - 1; i >= 0; --i) {\n            int curr_value = roman_dict[s[i]];\n            if (curr_value < prev_value) {\n                total -= curr_value;\n            } else {\n                total += curr_value;\n            }\n            prev_value = curr_value;\n        }\n        return total;\n    }\n};\n\nint main() {\n    Solution solution;\n    string roman = \"IX\";  // Example input\n    cout << \"Roman to integer: \" << solution.romanToInt(roman) << endl;\n    return 0;\n}`
    ,
    difficulty: "easy",
    language: "C++"
  },
  {
    id: 10,
    title: "Roman To Integer",
    code: `class Solution {\n    romanToInt(s) {\n        const roman_dict = {\n            'I': 1, 'V': 5, 'X': 10, 'L': 50,\n            'C': 100, 'D': 500, 'M': 1000\n        };\n        let total = 0;\n        let prev_value = 0;\n        \n        for (let i = s.length - 1; i >= 0; i--) {\n            const curr_value = roman_dict[s[i]];\n            if (curr_value < prev_value) {\n                total -= curr_value;\n            } else {\n                total += curr_value;\n            }\n            prev_value = curr_value;\n        }\n        return total;\n    }\n}\n\n// Example usage\nconst solution = new Solution();\nconst roman = \"IX\";  // Example input\nconsole.log(solution.romanToInt(roman));  // Output: 9`
    ,
    difficulty: "easy",
    language: "JavaScript"
  }  
];
