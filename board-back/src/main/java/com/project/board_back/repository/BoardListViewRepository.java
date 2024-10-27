package com.project.board_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.board_back.entity.BoardListViewEntity;

public interface BoardListViewRepository extends JpaRepository<BoardListViewEntity, Integer>{
    
}
