package com.project.board_back.common;

public interface ResponseCode {

        // 200 OK
        String SUCCESS = "SU";

        // 400 Bad Request
        String VALIDATION_FAILED = "VF";
        String DUPLICATE_EMAIL = "DE";
        String DUPLICATE_TEL_NUMBER = "DT";
        String DUPLICATE_NICKNAME = "DN";
        String NOT_EXISTED_USER = "NU";
        String NOT_EXISTED_BOARD = "NB";

        // 401 Unauthorized
        String SIGN_IN_FAIL = "SF";
        String AUTHORIZATION_FAIL= "AF";

        // 403 Forbidden
        String NO_PERMISSION= "NP";

        // 500 Invernal Server Error
        String DATABASE_ERROR = "DBE";
        
}
