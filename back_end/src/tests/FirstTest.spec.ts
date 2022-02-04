import { Origem } from "@models/Origem";

test('it should be ok', () => {
  const origem = new Origem();

  origem.origem = "aa";
  
  expect(origem.origem).toEqual('aa');
});
