let calcular = document.getElementById("calcular");
let dias = document.getElementById("semanas");

calcular.onclick = ()=>
{
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;
    let diferenca = moment(data2, "YYYY-MM-DD").diff(moment(data1, "YYYY-MM-DD"));
    var diferencaSemanas = parseInt(moment.duration(diferenca).asWeeks());
    dias.innerHTML = `<b>${diferencaSemanas}</b> semanas de diferença.`
}