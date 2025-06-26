import { login } from "./login";


describe('login', () => {

    window.alert = jest.fn();

    it('Deve exibir um alert com boas vindas', () => {
        login('Tamara');
        //expect(window.alert).toBeCalled();
        expect(window.alert).toHaveBeenCalledWith(`Bem vindo(a) Tamara`);
    })
})