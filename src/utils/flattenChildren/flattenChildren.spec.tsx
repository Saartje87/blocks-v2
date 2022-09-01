import { flattenChildren } from './flattenChildren';

describe('flattenChildren', () => {
  it('should flatten fragment', () => {
    const items = flattenChildren(
      <>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </>,
    );

    expect(items.length).toBe(3);
  });

  it('should flatten fragments recursively', () => {
    const items = flattenChildren(
      <>
        <div>A</div>
        <>
          <div>1</div>
          <div>2</div>
        </>
        <div>B</div>
      </>,
    );

    expect(items.length).toBe(4);
  });

  it('should keep numbers and strings intact', () => {
    const items = flattenChildren(
      <>
        {'A'}
        <div>A</div>
        {2}
      </>,
    );

    expect(items.length).toBe(3);
  });
});
