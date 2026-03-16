
import { db } from './firebase.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let estoque={Tradicional:0,Diet:0,Canela:0};
let totalProduzido=0;
let totalVendido=0;

window.showTab=function(id){
document.querySelectorAll(".tab").forEach(t=>t.style.display="none");
document.getElementById(id).style.display="block";
}

window.login=function(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="GB100" && p==="0000"){
document.getElementById("loginScreen").style.display="none";
document.getElementById("app").style.display="block";
showTab("dashboard");
}
else{
document.getElementById("loginMsg").innerText="Login inválido";
}
}

function atualizar(){

document.getElementById("eTrad").innerText=estoque.Tradicional;
document.getElementById("eDiet").innerText=estoque.Diet;
document.getElementById("eCanela").innerText=estoque.Canela;

document.getElementById("totalProduzido").innerText=totalProduzido;
document.getElementById("totalVendido").innerText=totalVendido;

grafico.data.datasets[0].data=[estoque.Tradicional,estoque.Diet,estoque.Canela];
grafico.update();
}

window.registrarProducao=async function(){

let produto=document.getElementById("produtoProducao").value;
let qtd=parseInt(document.getElementById("quantidadeProducao").value);

estoque[produto]+=qtd;
totalProduzido+=qtd;

await addDoc(collection(db,"historico"),{
tipo:"producao",
produto,
qtd,
data:new Date().toLocaleString()
});

atualizar();
}

window.registrarVenda=async function(){

let produto=document.getElementById("produtoVenda").value;
let qtd=parseInt(document.getElementById("quantidadeVenda").value);

estoque[produto]-=qtd;
totalVendido+=qtd;

await addDoc(collection(db,"historico"),{
tipo:"venda",
produto,
qtd,
data:new Date().toLocaleString()
});

carregarHistorico();

atualizar();
}

async function carregarHistorico(){

let tabela=document.getElementById("historicoTabela");
tabela.innerHTML="";

let snap=await getDocs(collection(db,"historico"));

snap.forEach(doc=>{

let d=doc.data();

if(d.tipo==="venda"){

let tr=document.createElement("tr");

tr.innerHTML=`
<td>${d.produto}</td>
<td>${d.qtd}</td>
<td>${d.data}</td>
`;

tabela.appendChild(tr);

}

});

}

let ctx=document.getElementById("grafico");

let grafico=new Chart(ctx,{
type:"pie",
data:{
labels:["Tradicional","Diet","Canela"],
datasets:[{data:[0,0,0]}]
}
});

