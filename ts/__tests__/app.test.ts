import {greeting} from '@main';

describe(`Given I have a test to do`, () => {
  it.todo('should calculate summary');
  it('should be true', () => expect(greeting()).toEqual('Hello'));
});
