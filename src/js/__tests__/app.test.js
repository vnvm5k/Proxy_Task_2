import showAttack from '../app';


test('first Object has description', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const result = showAttack(character);
  expect(result).toEqual([
    {
      description: 'Двойной выстрел наносит двойной урон', icon: 'http://...', id: 8, name: 'Двойной выстрел',
    },
    {
      description: 'Описание недоступно', icon: 'http://...', id: 9, name: 'Нокаутирующий удар',
    },
  ]);
});

test('second Object has description', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const result = showAttack(character);
  expect(result).toEqual([
    {
      description: 'Описание недоступно', icon: 'http://...', id: 8, name: 'Двойной выстрел',
    },
    {
      description: 'Двойной выстрел наносит двойной урон', icon: 'http://...', id: 9, name: 'Нокаутирующий удар',
    },
  ]);
});
