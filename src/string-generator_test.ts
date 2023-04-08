import { ok } from 'assert';

import { MathStringGenerator as Self } from './string-generator';

describe('src/string-generator.ts', () => {
    describe('.generate()', () => {
        it('十进制', async () => {
            const self = new Self(10, 8);
            const res = await self.generate();
            ok(
                /^\d{8}$/.test(res)
            );
        });
        
        it('字母', async () => {
            const self = new Self(26, 16);
            const res = await self.generate();
            ok(
                /^[0-9a-z]{16}$/.test(res)
            );
        });
    });
});