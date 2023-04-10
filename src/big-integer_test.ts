import { deepStrictEqual } from 'assert';

import { BigIntegerMath as Self } from './big-integer';

describe('src/big-integer.ts', () => {
    describe('.add(a: Integer, b: Integer)', () => {
        it('ok', async () => {
            const self = new Self(3);
            const res = self.add({
                unit: 0,
                value: 10
            }, {
                unit: 0,
                value: 100
            });
            deepStrictEqual(res, {
                unit: 0,
                value: BigInt(110)
            });
        });

        it('unit+', async () => {
            const self = new Self(3);
            const res = self.add({
                unit: 0,
                value: 900
            }, {
                unit: 0,
                value: 100
            });
            deepStrictEqual(res, {
                unit: 1,
                value: BigInt(1000)
            });
        });
    });

    describe('.divide(a: Integer, b: Integer)', () => {
        it('ok', async () => {
            const self = new Self(3);
            const res = self.divide({
                unit: 0,
                value: 66
            }, {
                unit: 0,
                value: 3
            });
            deepStrictEqual(res, {
                unit: 0,
                value: BigInt(22)
            });
        });

        it('unit-', async () => {
            const self = new Self(3);
            const res = self.divide({
                unit: 1,
                value: 1230
            }, {
                unit: 0,
                value: 20
            });
            deepStrictEqual(res, {
                unit: 0,
                value: BigInt(61)
            });
        });
    });

    describe('.multiply(a: Integer, b: Integer)', () => {
        it('ok', async () => {
            const self = new Self(3);
            const res = self.multiply({
                unit: 0,
                value: 66
            }, {
                unit: 0,
                value: 3
            });
            deepStrictEqual(res, {
                unit: 0,
                value: BigInt(198)
            });
        });

        it('unit+', async () => {
            const self = new Self(3);
            const res = self.multiply({
                unit: 0,
                value: 123
            }, {
                unit: 0,
                value: 200
            });
            deepStrictEqual(res, {
                unit: 1,
                value: BigInt(24600)
            });
        });
    });

    describe('.subtract(a: Integer, b: Integer)', () => {
        it('ok', async () => {
            const self = new Self(3);
            const res = self.subtract({
                unit: 0,
                value: 10
            }, {
                unit: 0,
                value: 100
            });
            deepStrictEqual(res, {
                unit: 0,
                value: BigInt(-90)
            });
        });

        it('unit-', async () => {
            const self = new Self(3);
            const res = self.subtract({
                unit: 1,
                value: 1000
            }, {
                unit: 0,
                value: 100
            });
            deepStrictEqual(res, {
                unit: 0,
                value: BigInt(900)
            });
        });
    });
});