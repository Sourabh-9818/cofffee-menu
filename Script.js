async function getdata() {
    try{
    const res = await fetch(`https://masai-api.herokuapp.com/coffee/menu`)
    const res2 = await res.json()
    console.log(res2, 'res2')
    append(res2);
}catch(er){
    console.log(er, 'error');
}
}

function append(res2){
    const content = document.getElementById("menu");
    const card =`<h2>${res2.data[0].description}</h2>
    <img src = ${res2.data[0].image}>
    <h2>${res2.data[0].price}</h2>`
    content.innerHTML=card;

}