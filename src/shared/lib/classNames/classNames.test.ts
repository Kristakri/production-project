import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional class', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expected)
  })
  test('with mods classes true', () => {
    const expected = 'someClass trueClass trueClassTwo'
    expect(classNames('someClass', { trueClass: true, trueClassTwo: true }, []))
      .toBe(expected)
  })
  test('with mods classes false', () => {
    const expected = 'someClass trueClass'
    expect(classNames('someClass', { trueClass: true, falseClass: false }, []))
      .toBe(expected)
  })
  test('with mods classes undefined', () => {
    const expected = 'someClass trueClass'
    expect(classNames('someClass',
      { trueClass: true, undefineClass: undefined },
      []))
      .toBe(expected)
  })
})
