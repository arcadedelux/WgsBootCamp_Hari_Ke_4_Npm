const validator = require('validator')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// Fungsi Tanya Nama
const question1 =()=> {
  return new Promise((resolve) => {
    rl.question('Nama? ', (name) => {
        resolve(name)
      console.log(`Nama Anda: ${name}`)
    })
   })
 }

 //Fungsi Tanya No Hp dengan validasi
const question2=()=> {
  return new Promise((resolve) => {
    rl.question('Nomer Hp? ', (phone) => {
        if (!validator.isMobilePhone(phone)) {
            question2()
        }else{
            resolve(phone)
            console.log(`Nomer Telephone Anda: ${phone}`)
        }
        });
    })
}

 //Fungsi Tanya Email dengan validasi
const question3=()=> {
    return new Promise((resolve) => {
      rl.question('Email? ', (email) => {
        if(!validator.isEmail(email)){
            question3()
        }
        else{ 
            resolve(email)
            console.log(`Email Anda: ${email}`)
        }
      })
    })
  }

            
const run = async () => {
    const name =  await question1()
    const nomer =  await question2()
    const email =  await question3()
 
  console.log(`Nama :${name} Nomer Hp:${nomer} Email:${email}`)
  rl.close()
}

run()