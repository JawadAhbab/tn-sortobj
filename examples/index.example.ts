import { sortobj } from '../src/index'

const obj = {
  breed: 'persian',
  name: 'Jawad',
  age: 22,
  sex: true,
  about: { phoneA: '006', phoneC: '00Z', phoneB: '005' },
  abouts: [
    { phoneC: '00X', phoneB: '001' },
    { phoneA: '004', phoneC: '00Y', phoneB: '003' },
  ],
}

console.log(JSON.stringify(obj, null, 2))
console.log(JSON.stringify(sortobj(obj), null, 2))
console.log(JSON.stringify(obj, null, 2))
