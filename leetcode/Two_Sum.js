/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in mp) {
      return [i, mp[diff]];
    }

    mp[nums[i]] = i;
  }
};

twoSum([3, 2, 4], 6);
// twoSum([2, 7, 11, 15], 9);
