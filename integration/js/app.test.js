import * as main from './main';

describe('Given I have a test to do', () => {
  it.todo('should calculate summary');
  it('should be true', () => {
    return expect(main.greeting()).toEqual('Hello');
  });
});
