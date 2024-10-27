package com.project.board_back.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="board_list_view")
@Table(name="board_list_view")

public class BoardListViewEntity {
    
    @Id
    private Integer boardNumber;
    private String title;
    private String content;
    private String image;
    private Integer favoriteCount;
    private Integer commentCount;
    private Integer viewCount;
    private String writeDatetime;
    private String writeEmail;
    private String writerNickname;
    private String writerProfileImage;

}
