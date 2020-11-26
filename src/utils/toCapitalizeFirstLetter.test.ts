import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна возвращать строку с первой заглавной буквой и остальными маленькими', () => {
    const str = toCapitalizeFirstLetter('bulbasaur');
    expect(str).toEqual('Bulbasaur');
  });
});
