import { getHealthStatus } from '../src/index';

test('health > 50 returns healthy', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('health between 15 and 50 returns wounded', () => {
  const result = getHealthStatus({ name: 'Лучник', health: 30 });
  expect(result).toBe('wounded');
});

test('health < 15 returns critical', () => {
  const result = getHealthStatus({ name: 'Мечник', health: 10 });
  expect(result).toBe('critical');
});
