import Team from "../app";
import ErrorRepository from "../map";

test("Добавляет уникального персонажа", () => {
  let team = new Team();
  const firstPerson = { name: "Dima" };
  const secondPerson = { name: "Adelina" };
  team.add(firstPerson);
  team.add(secondPerson);
  expect(team.members.size).toBe(2);
});

test("Не добавляет персонажа", () => {
  let team = new Team();
  const firstPerson = { name: "Dima" };
  team.add(firstPerson);
  expect(() => {
    team.add(firstPerson);
  }).toThrow(Error);
});

test("Добавляет всех уникальных персонажей", () => {
  let team = new Team();
  const firstPerson = { name: "Dima" };
  const secondPerson = { name: "Adelina" };
  const thirdPerson = { name: "Rick" };
  team.addAll(firstPerson,secondPerson,thirdPerson,firstPerson,secondPerson,thirdPerson)
  expect(team.members.size).toBe(3);
});

test("Возвращает массив", () => {
  let team = new Team();
  const firstPerson = { name: "Dima" };
  const secondPerson = { name: "Adelina" };
  team.add(firstPerson);
  team.add(secondPerson);
  expect(team.toArray()).toEqual([firstPerson,secondPerson]);
});

test('Возвращает ошибку', () => {
  let errorRepository = new ErrorRepository;
  expect(errorRepository.translate(500)).toEqual('Internal Server Error');
})

test('Возвращает строку Unknown error', () => {
  let errorRepository = new ErrorRepository;
  expect(errorRepository.translate(100)).toEqual('Unknown error');
})