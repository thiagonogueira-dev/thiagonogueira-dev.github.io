let calcular = document.getElementById("calcular");
let dias = document.getElementById("dias");

calcular.onclick = ()=>
{
    let data = document.getElementById("data").value;
    let diferenca = moment(new Date(), "YYYY-MM-DD").diff(moment(data, "YYYY-MM-DD"));
    var diasVividos = parseInt(moment.duration(diferenca).asDays());
    dias.innerHTML = `Você já viveu <b>${diasVividos}</b> dias.`
}