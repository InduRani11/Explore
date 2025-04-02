const main=document.getElementById( "main");
const input=document.getElementById( 'input');
const apiUsers='https://jsonplaceholder.typicode.com/users';
const imageApi='https://robohash.org/'
fetch(apiUsers).then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
        // let data1=data.filter(val,()=>{ if(val.name.contain(input.value)) return val})
        for(let i=0;i<data.length;i++){
            createADiv(data,i);
        }
        input.addEventListener('keyup',()=>{
            const divs= document.querySelectorAll('.card');
            for(let i=0;i<divs.length;i++){
                main.removeChild(divs[i]);
            }
            // main.removeChild(document.querySelector('.card'))
            if(input.value==''){
                for(let i=0;i<data.length;i++){
                    createADiv(data,i);
                }
            }else{
                let data1=data.filter((val,i)=>{ return val.name.toUpperCase().includes(input.value.toUpperCase())})
                console.log(data1);
                for(let i=0;i<data1.length;i++){
                    createADiv(data1,i);
                }
            }
        });
});
function createADiv(data,index){
    let div=document.createElement('div');
    div.classList.add("card");
    let img=document.createElement('img');
    img.setAttribute('src',`${imageApi}${index}`)
    let h3=document.createElement('h2');
    h3.innerText=data[index].name;
    console.log()
    let p1=document.createElement('p');
    p1.classList.add("email-para");
    p1.innerText=data[index].email
    let p2=document.createElement('p');
    p1.classList.add("username-para");
    p2.innerText=data[index].username;
    div.append(img,h3,p1,p2);
    main.append(div);
}