package com.project.board_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.board_back.entity.SearchLogEntity;

public interface SearchLogRepository extends JpaRepository<SearchLogEntity, Integer>{
    
}
