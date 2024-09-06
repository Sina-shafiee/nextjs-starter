import { describe, expect, it } from 'vitest';

function sum(a: number, b: number): number {
  return a + b;
}

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, 2)).toBe(1);
  });

  it('should handle zero', () => {
    expect(sum(0, 5)).toBe(5);
  });
});
