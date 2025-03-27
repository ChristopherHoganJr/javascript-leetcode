/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  // if it is a leaf node
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  // check left and right subtrees
  let remainingSum = targetSum - root.val;

  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
};
