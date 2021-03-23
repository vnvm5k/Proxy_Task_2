export default function showAttack(object) {
  const [...special] = object.special;
  const finalArr = [];
  special.forEach((element) => {
    if (element.description) {
      finalArr.push(element);
    } else {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = element;

      const checkedObj = {
        id, name, icon, description,
      };
      finalArr.push(checkedObj);
    }
  });
  return finalArr;
}
