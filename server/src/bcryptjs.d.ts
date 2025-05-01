declare module 'bcryptjs' {
    // Функция за хеширане на парола
    export function hash(password: string | Buffer, saltRounds: number | string): Promise<string>;
    export function hashSync(password: string | Buffer, saltRounds: number | string): string;

    // Функция за сравняване на парола с хешираната версия
    export function compare(password: string | Buffer, hashedPassword: string): Promise<boolean>;
    export function compareSync(password: string | Buffer, hashedPassword: string): boolean;

    // Генериране на сол
    export function genSalt(saltRounds: number): Promise<string>;
    export function genSaltSync(saltRounds: number): string;

    // Допълнителни утилитни функции, ако са нужни
    export function getRounds(hashedPassword: string): number;
}

export = bcryptjs;