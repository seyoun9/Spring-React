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
@Entity(name="search_log")
@Table(name="search_log")

public class SearchLogEntity {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sequence;
    private String searchWord;
    private String relationWord;
    private Boolean relation;

}
