import { StrPipe } from './str.pipe';

describe('StrPipe', () => {
  it('create an instance', () => {
    const pipe = new StrPipe();
    expect(pipe).toBeTruthy();
  });
});
