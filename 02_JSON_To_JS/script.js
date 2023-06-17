const jsonString = `{
"list":[
  {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
  },
  {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
  }
]}
`;

const data = JSON.parse(jsonString);
const users = []
const dataList = data.list;

dataList.forEach(person => {
    const user = {
  name:person.name,
  age: Number(person.age),
  prof:person.prof
    }
    
    users.push(user);
    // console.log('user', user)
})
const list = {list: users}
console.log(list);