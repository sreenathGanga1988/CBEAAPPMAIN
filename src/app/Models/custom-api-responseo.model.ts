export class CustomApiResponse {
  isSucess: boolean | undefined; //  denotes whether request was sucess
  statusCode: number | undefined; //  custom status codes from webapi
  error: string | undefined;      // error message in case of error
  value: any;                 //responsebody which may be array of object ot single object
}
