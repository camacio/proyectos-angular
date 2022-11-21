import { ImagePipe } from './pipes/image.pipe';

describe('ImagePipe', () => {
  it('create an instance', () => {
    const pipe = new ImagePipe();
    expect(pipe).toBeTruthy();
  });
});
