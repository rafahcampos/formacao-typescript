export const soma = (num: number): number => {
    return num + 1;
}


export const multiplica = (num: number, mult: number): string | number => {
    if (mult === 2 || mult === 3) {
        return num * mult;
    }
    return 'Multiplicador não aceito';
}