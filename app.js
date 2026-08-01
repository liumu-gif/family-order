const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

let cart = {};

const userSelect = document.getElementById("username");
const menuDiv = document.getElementById("menu");
const totalSpan = document.getElementById("total");

USERS.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    userSelect.appendChild(option);
});

const lastUser = localStorage.getItem("family_user");
if(lastUser){
    userSelect.value = lastUser;
}

userSelect.onchange = () =>{
    localStorage.setItem("family_user",userSelect.value);
};

MENU.forEach(group=>{

    const card=document.createElement("div");
    card.className="card";

    const title=document.createElement("div");
    title.className="category";
    title.innerText=group.category;

    card.appendChild(title);

    group.items.forEach(food=>{

        cart[food.id]=0;

        const row=document.createElement("div");
        row.className="food";

        row.innerHTML=`

<div class="left">

<div class="emoji">${food.emoji}</div>

<div>

<div class="name">${food.name}</div>

<div class="price">￥${food.price}</div>

</div>

</div>

<div class="counter">

<button class="btn" onclick="change(${food.id},-1)">－</button>

<div class="count" id="c${food.id}">0</div>

<button class="btn" onclick="change(${food.id},1)">＋</button>

</div>

`;

        card.appendChild(row);

    });

    menuDiv.appendChild(card);

});

function change(id,num){

    cart[id]+=num;

    if(cart[id]<0) cart[id]=0;

    document.getElementById("c"+id).innerText=cart[id];

    updateTotal();

}

function updateTotal(){

    let total=0;

    MENU.forEach(g=>{

        g.items.forEach(f=>{

            total+=cart[f.id]*f.price;

        });

    });

    totalSpan.innerText="￥"+total;

}
function submitOrder(){

    let list=[];

    MENU.forEach(g=>{

        g.items.forEach(f=>{

            if(cart[f.id]>0){

                list.push({
                    name:f.name,
                    count:cart[f.id],
                    price:f.price
                });

            }

        });

    });

    if(list.length===0){

        alert("请先点菜");

        return;

    }

    const order={

        table:localStorage.getItem("username") || "家庭成员",

        items:list,

        total:list.reduce((s,i)=>s+i.count*i.price,0),

        status:"待制作",

        time:new Date().toLocaleString()

    };

    console.log(order);

    alert("下单成功！");

}
