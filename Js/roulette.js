let GO = document.querySelector("button");
let gain = 100 ;
let perte = 0 ;
let a_deviner;
function nombre_au_hasard (){
 return Math.floor(Math.random()*36);
}
function verification_de_la_parite(parite, a_deviner){
if(parite=="pair" &&  a_deviner%2==0) 
   return 1;
else if(parite=="impair" && a_deviner%2!=0)
   return 1;
   else
   return 0;
}
GO.onclick =function(){
if(document.querySelector("input[name = mystere]").value == ""){
  alert("vous n'avez pas choisi un nombre a deviner")
  return 0;
}
if(document.querySelector("input[name=mise]").value== ""){
    alert("vous n'avez pa parier")
    return 0;
}
a_deviner= nombre_au_hasard();
let parite= verification_de_la_parite(document.querySelector("select").value,a_deviner)
let mystere=document.querySelector("input[name=mystere]").value
let mise=document.querySelector("input[name=mise]").value
if(a_deviner==0){
gain -= mise;
perte += mise;
alert("desole vous avez perdu le nombre a deviner est 0")
}
else if(a_deviner==mystere){
 gain += mise*36
 alert("jackpot vous avez trouvez exactement le nombre vous gagnez votre mise *36");
}
else if(parite==1){
gain+=mise*2
alert("vous avez trouvez la parite donc vous recevrez une double de votre mise");
}
else if(parite==0){
gain-=mise
perte+=mise
alert("vous n'avez pas trouvez la parite parce-que le nombre c'etait"+a_deviner+"vous avez perdu votre mise");

}
document.getElementById("gain").innerHTML=("vos gains sont de :"+gain*1000+"fr.")
document.getElementById("perte").innerHTML=("vos perte sont de :"+perte*1000+"fr.")
}