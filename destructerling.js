// const person = {
//     name: 'John',
//     age: 34,
//     city : 'San Francisco',
//     address: {
//         street: "trinh van bo",
//         numble: 5
//     }
// };

// const {name: myname, age, city, address}=person;

// console.log (myname, age,city,address);
// function output({name, age,city,address : {street}}) {
//     console.log(name, age,city,street);
// }
// output(person);
function usestate(incheck){
    let stale = incheck;
    function getstate(){
        return stale;
    }
    function setstate(newstate){
        return stale=newstate;
    }
    return [getstate,setstate];
};
const [count , setcount]= usestate(10);
console.log("count cu" ,count());
setcount(40);
console.log("count moi", count());
