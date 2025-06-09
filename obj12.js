let user={
    canEditView:true
};
let user1={
    name:"john",
    suename:"smith",
};
delete user.name;
console.log(user1);
let user3 = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
let clone={};
for(let key in user1)
{
    clone[key]==user1[key];
}
clone.name="pete;"
console.log(user1.name);
Object.assign(user1,user);
console.log(user);
