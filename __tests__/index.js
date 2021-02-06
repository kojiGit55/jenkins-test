import { getString } from "../index";

test('should return abcde', () => {
  expect(getString()).toBe("abcde");
});