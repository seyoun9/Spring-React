package com.project.board_back.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="board")
@Table(name="board")

public class BoardEntity {
    
    @Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer board;
    private String title;
    private String content;
    private String writeDatetime;
    private Integer favoriteCount;
    private Integer commentCount;
    private Integer viewCount;
    private String writerEmail;
    
}
