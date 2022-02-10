import { httpResponse, httpRequest } from "../protocols/http";
import { MissingParamError } from "../errors/missing-param-error";

export class SingUpController {
  handle(httpRequest: httpRequest): httpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError("Missing param: name"),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError("Missing param: e-mail"),
      };
    }
    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new MissingParamError("Missing param: password"),
      };
    }
  }
}
