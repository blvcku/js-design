import { vi } from 'vitest';

type JestToErrorArg = Parameters<
    jest.Matchers<unknown, () => unknown>['toThrow']
>[0];

const expectToThrow = (func: () => unknown, error?: JestToErrorArg): void => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = vi.spyOn(console, `error`);
    spy.mockImplementation(() => {});

    expect(func).toThrow(error);

    spy.mockRestore();
};

export default expectToThrow;
