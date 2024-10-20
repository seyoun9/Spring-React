import { BoardListItem } from "types/interface";

const top3BoardListMock: BoardListItem[] = [
    {
        boardNumber: 1,
        title: "제목입니다",
        content: "내용입니다",
        boardTitleImage: null,
        favoriteCount: 0,
        commentCount: 0,
        viewCount: 0,
        writeDatetime: "2024.10.15. 22:00",
        writeNickname: "닉네임입니다",
        writerProfileImage: "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        boardNumber: 2,
        title: "제목입니다2",
        content: "내용입니다2",
        boardTitleImage: " https://images.unsplash.com/photo-1728832670169-bccd458692a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        favoriteCount: 1,
        commentCount: 1,
        viewCount: 1,
        writeDatetime: "2024.10.15. 22:00",
        writeNickname: "닉네임입니다2",
        writerProfileImage: null
    },
    {
        boardNumber: 3,
        title: "제목입니다3",
        content: "내용입니다3",
        boardTitleImage: " https://images.unsplash.com/photo-1728832670169-bccd458692a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        favoriteCount: 1,
        commentCount: 2,
        viewCount: 1,
        writeDatetime: "2024.10.20. 12:00",
        writeNickname: "닉네임입니다3",
        writerProfileImage: null
    }
];

export default top3BoardListMock;