interface login{
    name:string;
}

export const login = (name : string) : void => {
    alert(`Bem vindo(a) ${name}`)
}