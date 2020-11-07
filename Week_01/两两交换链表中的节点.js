/**
 * @param {ListNode} head
 * @return {ListNode}
 */2
//递归法
// var swapPairs = function(head) {
//     if(head == null || head.next == null){
//         return head;
//     }
//      let newHead=head.next ;  //获取第二个节点 
//        head.next =swapPairs(newHead.next)  //进入下一轮递归 (一定要先进入递归再去改变newHead.next 的指向)
//        newHead.next=head      //将第二个节点指向1;   
//        return newHead
// };

//栈
// var swapPairs = function(head) {
//       let p=head&&head.next||head
//       while(head&&head.next){
//           let tmp=head.next.next  //3
//           head.next.next=head  //2->1
//           head.next=tmp&&tmp.next||tmp //1->3
//           head=tmp //更新head
//       }
//       return p
// };

//递归法

var swapPairs = function (head) {
    if (head == null || head.next == null) {
        return head
    }

    let newHead = head.next;//将第二个节点跳出来
    head.next = swapPairs(newHead.next) //1->3 同时进入递归
    newHead.next = head//2->1
    return newHead

};