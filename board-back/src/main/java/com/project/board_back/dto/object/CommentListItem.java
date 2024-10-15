package com.project.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentListItem {
    
    private String email;
    private String nickname;
    private String writeDatetime;
    private String content;

}
