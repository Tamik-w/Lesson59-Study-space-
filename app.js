import fs from 'fs';
const { promises } = fs;

const users = [
    {name: 'Mike', age: 25},
    {name: 'Bob', age: 32},
    {name: 'Nikola', age: 17},
]
const newData = [
    {name: 'Anna', age: 24},
    {name: 'Tom', age: 52}
]
const newObj = {
    "users": users, newData
}

promises.writeFile('data.json', JSON.stringify(newObj) , err => {
    if(err){
        console.log(err)
    } else {
        console.log('File have written')
    }
})
  
async function isExist(file) {
    try {
      await promises.stat(file);
      return true;
    } catch (error) {
      if (error.code === 'ENOENT') {
        return false;
      }
      throw error;
    }
}

isExist('data.json').then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
