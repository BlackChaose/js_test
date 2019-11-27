import getFunction from '../functions';

const get = getFunction();

// BEGIN (write your solution here)

if ( get({ key: 'value' }, 'key') === 'value' ) {
  console.log('ok!');
} else {
  throw new Error('Функция работает неверно!');
}
if ( get( {}, 'key','defaultValue') === 'defaultValue' ){
  console.log('ok!');
} else {
  throw new Error('Функция работает неверно!');
}
console.log(get( {key: 'value', key2: 'defaultValue'}, 'defaultValue', 'defaultValue'));
if ( get( {key: 'value', key2: 'defaultValue'}, 'defaultValue', 'defaultValue') == 'defaultValue' ) {
  console.log('ok!');
} else {
  throw new Error('Функция работает неверно!');
}
// END