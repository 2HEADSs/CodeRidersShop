declare module 'bcryptjs' {
    export function compare(password: string, hash: string): Promise<boolean>;
    export function hash(password: string, saltRounds: number | string): Promise<string>;
}