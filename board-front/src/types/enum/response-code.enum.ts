enum ResponseCode {

            // 200 OK
            SUCCESS = "SU",

            // 400 Bad Request
            VALIDATION_FAILED = "VF",
            DUPLICATE_EMAIL = "DE",
            DUPLICATE_TEL_NUMBER = "DT",
            DUPLICATE_NICKNAME = "DN",
            NOT_EXISTED_USER = "NU",
            NOT_EXISTED_BOARD = "NB",
    
            // 401 Unauthorized
            SIGN_IN_FAIL = "SF",
            AUTHORIZATION_FAIL= "AF",
    
            // 403 Forbidden
            NO_PERMISSION= "NP",
    
            // 500 Invernal Server Error
            DATABASE_ERROR = "DBE",
            
}

export default ResponseCode;