/**
 * Definition for singly-linked list.
    function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let current = head
    let prev = null
    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};

console.log(reverseList([1,2,3,4,5]));





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {

    // if (head === null) return null;

    // Handle initial nodes that need to be removed
    while (head !== null && head.val === val) {
        head = head.next;
    }
    
    let current = head;
    while(current !== null && current.next !== null) {
        if(current.next.val === val){
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
};