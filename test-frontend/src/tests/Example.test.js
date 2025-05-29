import { describe, test, expect } from 'vitest';

describe('Basic Vitest Test', () => {
  test('should add two numbers correctly', () => {
    expect(1 + 1).toBe(2);
  });

  test('should return true for a true value', () => {
    expect(true).toBe(true);
  });
});