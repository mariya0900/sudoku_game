
dates=['2021/01/17', '2021/01/21', '2021/02/01', '2021/02/21', '2021/03/02'];
times=['3:41', '4:01', '2:52', '3:08', '2:51'];

var tbody='';
for (let i=0;i<5;i++){
    tbody+='<tr><td>'+dates[i]+'</td><td>'+times[i]+'</td>';
}
document.getElementsByTagName("tbody")[0].innerHTML=tbody;
