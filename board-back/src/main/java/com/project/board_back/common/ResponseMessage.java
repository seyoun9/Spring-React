package com.project.board_back.common;

public interface ResponseMessage {
    
        // 200 OK
        String SUCCESS = "Success.";

        // 400 Bad Request
        String VALIDATION_FAILED = "Validation failed.";
        String DUPLICATE_EMAIL = "Duplicate email.";
        String DUPLICATE_TEL_NUMBER = "Duplicate tel number.";
        String DUPLICATE_NICKNAME = "Duplicate nickname.";
        String NOT_EXISTED_USER = "This user does not exist.";
        String NOT_EXISTED_BOARD = "This board does not exist.";

        // 401 Unauthorized
        String SIGN_IN_FAIL = "Login information mismatch.";
        String AUTHORIZATION_FAIL= "Authorization failed.";

        // 403 Forbidden
        String NO_PERMISSION= "Do not have permission.";

        // 500 Invernal Server Error
        String DATABASE_ERROR = "Database error.";
        
}
