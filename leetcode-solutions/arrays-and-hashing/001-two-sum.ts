/**
 * Problem: Two Sum
 * LeetCode #: 1
 * Difficulty: Easy
 * Topic: Arrays & Hashing
 * Link: https://leetcode.com/problems/two-sum/
 *
 * Approach: Use a Map to store each number's index as we iterate.
 *           For each number, check if (target - current) exists in the Map.
 *
 * Time: O(n) — single pass through array
 * Space: O(n) — Map stores up to n elements
 *
 * Key Pattern: HashMap complement lookup
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]
