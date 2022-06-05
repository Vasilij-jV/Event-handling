import differentRandom, { generator } from '../mae2';

test('random, non-recurring number', () => {
  const str = Array(...Array(32)).map(() => differentRandom(generator)).join('');
  const expected = expect.stringMatching(/0{2}|1{2}|3{2}4{2}|5{2}|6{2}|7{2}|8{2}|9{2}/);

  expect(str).not.toEqual(expected);
});
