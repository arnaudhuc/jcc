import { calcCardPosition } from '../buildCard';

describe('calcCardPosition', () => {
  test('it should return 1st card position at 10,0', () => {
    expect(calcCardPosition(0)).toMatchObject({ x: 10, y: 0 });
  });

  test('it should return 2nd card position at 220,0', () => {
    expect(calcCardPosition(1)).toMatchObject({ x: 220, y: 0 });
  });

  test('it should return 7th card position at 10, 310', () => {
    expect(calcCardPosition(6)).toMatchObject({ x: 10, y: 310 });
  });

  test('it should return 13th card position at 10, 620', () => {
    expect(calcCardPosition(12)).toMatchObject({ x: 10, y: 620 });
  });
});
