const vm = require('vm');

const context = vm.createContext({
  foo: 42
});

const code = `
  if (foo === 42) {
    console.log('The answer to the ultimate question of life, the universe, and everything!');
  } else {
    console.log('Hmm, something went wrong...');
  }
`;

vm.runInContext(code, context);
