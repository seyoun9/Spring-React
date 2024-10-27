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
@Entity(name="image")
@Table(name="image")

public class ImageEntity {
    
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer sequence;
    private Integer boardNumber;
    private String image;
    
}
