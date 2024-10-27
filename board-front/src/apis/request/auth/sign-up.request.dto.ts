export default interface SignUpRequestDto {

    email: string;
    password: string;
    nickname: string;
    telnumber: string;
    address: string;
    addressdetail: string | null;
    agreedpersonal: boolean;

}