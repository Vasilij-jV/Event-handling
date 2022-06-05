/* eslint-disable import/no-mutable-exports */
export let generator = 0;

export default function differentRandom(previousCount) {
  generator = Math.floor(Math.random() * 10);

  if (generator === previousCount) {
    for (let i = 0; generator === previousCount; i += 1) {
      generator = Math.floor(Math.random() * 10);
    }
    return generator;
  }
  return generator;
}

differentRandom(generator);
