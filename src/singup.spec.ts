import { SingUpController } from "../presentation/controllers/SignUpController";
import {MissingParamError} from "../presentation/errors/missing-param-error";

describe("SingnUp Controller", () => {
   test("Should return 400 if no name is provided", () => {
        const test = new SingUpController();
        const httpRequest = {
            body: {
                email: "teste@hotmail.com",
                password: "123456",
                passwordConfirmation: "123456"
            }
        };
        const httpResponse = test.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("Missing param: name"));

    
    });
    
    test("Should return 400 if no email is provided", () => {
        const test = new SingUpController();
        const httpRequest = {
            body: {
                name: "Teste",
                password: "123456",
                passwordConfirmation: "123456"
            }
        };
        const httpResponse = test.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("Missing param: e-mail"));

    
    });

    test("Should return 400 if no password is provided", () => {
        const test = new SingUpController();
        const httpRequest = {
            body: {
                name: "Teste",
                email: "qwerq@hotmail.com",
                passwordConfirmation: "123456"
            }
        };
        const httpResponse = test.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new MissingParamError("Missing param: password"));

    });
});
