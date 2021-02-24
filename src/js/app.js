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

export default function showAttack({
  special: [
    firstAttack,
    secondAttack,
  ],
} = character) {
  const checkFirstArr = firstAttack.description;
  const checkSecondArr = secondAttack.description;
  const finalArr = [];
  if (checkFirstArr) {
    finalArr.push(firstAttack);
  } else {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = firstAttack;

    const checkedObj = {
      id, name, icon, description,
    };
    finalArr.push(checkedObj);
  }

  if (checkSecondArr) {
    finalArr.push(secondAttack);
  } else {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = secondAttack;

    const checkedObj = {
      id, name, icon, description,
    };
    finalArr.push(checkedObj);
  }

  return finalArr;
}
