import { calcCardPosition } from '../drawCard';

let cardPosition = {
  x: 0,
  y: 0
}
describe('calcCardPosition', () => {
  test('it should return 1st card position at 10,0', () => {
    expect(calcCardPosition(0)).toMatchObject({ "x": 10, "y": 0 })
  });

  test('it should return 7th card position at 10, 310', () => {
    expect(calcCardPosition(6)).toMatchObject({ "x": 10, "y": 310 })
  })
})
