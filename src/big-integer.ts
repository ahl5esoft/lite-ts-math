import { IMath } from './i-math';
import { Integer } from './integer';

export class BigIntegerMath implements IMath {
    public constructor(
        private m_UnitLength: number
    ) { }

    public add(a: Integer, b: Integer) {
        const res = BigInt(a.value) + BigInt(b.value);
        return {
            unit: Math.trunc((res.toString().length - 1) / this.m_UnitLength),
            value: res
        };
    }

    public divide(a: Integer, b: Integer) {
        const res = BigInt(a.value) / BigInt(b.value);
        return {
            unit: Math.trunc((res.toString().length - 1) / this.m_UnitLength),
            value: res
        };
    }

    public mod(a: Integer, b: Integer) {
        const res = BigInt(a.value) % BigInt(b.value);
        return {
            unit: Math.trunc((res.toString().length - 1) / this.m_UnitLength),
            value: res
        };
    }

    public multiply(a: Integer, b: Integer) {
        const res = BigInt(a.value) * BigInt(b.value);
        return {
            unit: Math.trunc((res.toString().length - 1) / this.m_UnitLength),
            value: res
        };
    }

    public subtract(a: Integer, b: Integer) {
        const res = BigInt(a.value) - BigInt(b.value);
        return {
            unit: Math.trunc((res.toString().length - 1) / this.m_UnitLength),
            value: res
        };
    }
}
