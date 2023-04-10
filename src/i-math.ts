import { Integer } from './integer';

export interface IMath {
    /**
     * a + b
     * @param a 
     * @param b 
     */
    add(a: Integer, b: Integer): Integer;

    /**
     * a / b
     * @param a 
     * @param b 
     */
    divide(a: Integer, b: Integer): Integer;

    /**
     * a % b
     * @param a 
     * @param b 
     */
    mod(a: Integer, b: Integer): Integer;

    /**
     * a * b
     * @param a 
     * @param b 
     */
    multiply(a: Integer, b: Integer): Integer;

    /**
     * a - b
     * @param a 
     * @param b 
     */
    subtract(a: Integer, b: Integer): Integer;
}