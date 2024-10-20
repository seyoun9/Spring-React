import { CommentListItem } from "types/interface";

const commentListMock: CommentListItem[] = [
    {
        "nickname": "유저1",
        "profileImage": null,
        "writeDatetime": "5시간 전",
        "content": "대충 댓글 내용입니다1."
    },
    {
        "nickname": "유저2",
        "profileImage": "https://images.unsplash.com/photo-1728832670169-bccd458692a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "writeDatetime": "3시간 전",
        "content": "대충 댓글 내용입니다2."
    },
    {
        "nickname": "유저3",
        "profileImage": "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "writeDatetime": "1시간 전",
        "content": "대충 댓글 내용입니다3."
    }
];

export default commentListMock;