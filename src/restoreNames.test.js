'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it(`restores for 'undefiend'`, () => {
    const user = [
      {
        firstName: undefined,
        lastName: 'Horseman',
        fullName: 'Bojack Horseman',
      },
      {
        firstName: undefined,
        lastName: 'Whites',
        fullName: 'Entony Whites',
      },
      {
        firstName: undefined,
        lastName: 'Fork',
        fullName: 'Rick Fork',
      },
    ];

    const expectedUser = [
      {
        firstName: 'Bojack',
        lastName: 'Horseman',
        fullName: 'Bojack Horseman',
      },
      {
        firstName: 'Entony',
        lastName: 'Whites',
        fullName: 'Entony Whites',
      },
      {
        firstName: 'Rick',
        lastName: 'Fork',
        fullName: 'Rick Fork',
      },
    ];

    restoreNames(user);
    expect(user).toEqual(expectedUser);
  });

  it(`restores for absent 'lastName'`, () => {
    const user = [
      {
        lastName: 'Horseman',
        fullName: 'Bojack Horseman',
      },
      {
        lastName: 'Whites',
        fullName: 'Entony Whites',
      },
      {
        lastName: 'Fork',
        fullName: 'Rick Fork',
      },
    ];

    const expectedUser = [
      {
        firstName: 'Bojack',
        lastName: 'Horseman',
        fullName: 'Bojack Horseman',
      },
      {
        firstName: 'Entony',
        lastName: 'Whites',
        fullName: 'Entony Whites',
      },
      {
        firstName: 'Rick',
        lastName: 'Fork',
        fullName: 'Rick Fork',
      },
    ];

    restoreNames(user);
    expect(user).toEqual(expectedUser);
  });

  it(`does not edit filled 'lastName'`, () => {
    const user = [
      {
        firstName: 'Bojack',
        lastName: 'Horseman',
        fullName: 'Tom Horseman',
      },
      {
        firstName: 'Emmy',
        lastName: 'Loyd',
        fullName: 'Emilia Loyd',
      },
      {
        firstName: 'Lily',
        lastName: 'What',
        fullName: 'Lilian What',
      },
    ];

    const expectedUser = [
      {
        firstName: 'Bojack',
        lastName: 'Horseman',
        fullName: 'Tom Horseman',
      },
      {
        firstName: 'Emmy',
        lastName: 'Loyd',
        fullName: 'Emilia Loyd',
      },
      {
        firstName: 'Lily',
        lastName: 'What',
        fullName: 'Lilian What',
      },
    ];

    restoreNames(user);
    expect(user).toEqual(expectedUser);
  });

  it('function does not return', () => {
    const user = [
      {
        lastName: 'Horseman',
        fullName: 'Bojack Horseman',
      },
      {
        lastName: 'Whites',
        fullName: 'Entony Whites',
      },
      {
        lastName: 'Fork',
        fullName: 'Rick Fork',
      },
    ];

    expect(restoreNames(user)).toBeUndefined();
  });

  it('does not edit empty array', () => {
    const user = [];
    const expectedUser = [];

    restoreNames(user);
    expect(user).toEqual(expectedUser);
  });
});
