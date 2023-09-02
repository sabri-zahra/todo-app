import { power } from './power';
//const power = require('power');
describe('power functionality', () => {
  it('should power two number correctly and return the value', () => {
    const result = power(3,2);
    expect(result).toBe(9);
  });
});