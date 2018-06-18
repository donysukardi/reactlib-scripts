import prettierRc from '../prettierrc'

test('It matches snapshot', () => {
  expect(prettierRc).toMatchSnapshot()
})
