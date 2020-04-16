import { MyLib } from '../src/index';

describe('库测试', () => {
  it('获取类的属性', () => {
    const name = 'wu-yang';
    const lib = new MyLib(name);
    expect(lib.getName()).toBe('Hi, ' + name);
  });
});
