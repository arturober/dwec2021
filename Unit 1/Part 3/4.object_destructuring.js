let a = [1, 2, 3, 4];
let [n1, n2] = a;
console.log(n1 + " - " + n2); // 1 - 2

let user = {
  id: 3,
  name: "Peter",
  email: "peter@gmail.com",
};


let {id, name, email} = user;
console.log(`${id} - ${name} (${email})`);
let {id: userId, name: userName, email: userEmail} = user;
console.log(`${userId} - ${userName} (${userEmail})`);

function showInfo({id, name, email}) {
    console.log(`${id} - ${name} (${email})`);
}

showInfo(user);
console.log(user);
