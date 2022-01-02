var head=document.createElement('h1');
head.innerHTML="Pagination-Task";
head.setAttribute('id','title');

var p=document.createElement('p');
p.setAttribute('id','description');
p.innerHTML="I'm Sathishkumar B30WD Batch i used 20 buttons for pagination";

var div=document.createElement('div');
div.setAttribute('class','container');

var contain=document.createElement('div');
contain.setAttribute('class','table-responsive tabledata');

 var contain1=document.createElement('div');
 contain1.setAttribute('class','buttonlist');

 
 var first=button('button','changePage(1)','first','First');
 var preview=button('button','prev()','preview',"&laquoPreview");

var bu1=button('button','changePage(1)','page1',1);
var bu2=button('button','changePage(2)','page2',2);
var bu3=button('button','changePage(3)','page3',3);
var bu4=button('button','changePage(4)','page4',4);
var bu5=button('button','changePage(5)','page5',5);
var bu6=button('button','changePage(6)','page6',6);
var bu7=button('button','changePage(7)','page7',7);
var bu8=button('button','changePage(8)','page8',8);
var bu9=button('button','changePage(9)','page9',9);
var bu10=button('button','changePage(10)','page10',10);
var bu11=button('button','changePage(11)','page11',11);
var bu12=button('button','changePage(12)','page12',12);
var bu13=button('button','changePage(13)','page13',13);
var bu14=button('button','changePage(14)','page14',14);
var bu15=button('button','changePage(15)','page15',15);
var bu16=button('button','changePage(16)','page16',16);
var bu17=button('button','changePage(17)','page17',17);
var bu18=button('button','changePage(18)','page18',18);
var bu19=button('button','changePage(19)','page19',19);
var bu20=button('button','changePage(20)','page20',20);

var next=button('button','next1()','next',"Next&raquo");
var last=button('button','changePage(20)','last','Last')

function button(element,onclick,idname,val){
        elem=document.createElement(element);
        elem.setAttribute('onclick',onclick);
        elem.setAttribute('id',idname);
        elem.innerHTML=val;
      
        return elem;
}
createtabledata(0,5)
document.body.append(head,p,div);
contain1.append(first,preview,bu1,bu2,bu3,bu4,bu5,bu6,bu7,bu8,bu9,bu10,bu11,bu12,bu13,bu14,bu15,bu16,bu17,bu18,bu19,bu20,next,last);
div.append(contain,contain1);
var cur_page=0
var rec_perpage=20;
var max_pages=Math.ceil(100/rec_perpage);
function prev(){
    if(cur_page>1){
        changePage(cur_page-1);
    }
}
function next1(){
    if(cur_page<20){
        changePage(cur_page+1);
    }
}


function changePage(num){
    if(num<2)num=1;
    if(num>20)num=20;


    var startpoint=(num-1)*max_pages;
    var endpoint=(num)*max_pages;
    cur_page=num;
    createtabledata(startpoint,endpoint);

    if(num===1){
        document.getElementById('first').style.visibility="hidden";
        document.getElementById('preview').style.visibility="hidden";
    }
    else{
        document.getElementById('first').style.visibility="visible";
        document.getElementById('preview').style.visibility="visible";
    }

    if(num===20){
        document.getElementById('next').style.visibility="hidden";
        document.getElementById('last').style.visibility="hidden";
    }
    else{
        document.getElementById('next').style.visibility="visible";
        document.getElementById('last').style.visibility="visible";
    }
}




async function createtabledata(start,end){
    contain.innerHTML=" ";
    try {
    var res=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    var data=await res.json();
    for(var j in data)
    console.log(data[j]);
    var table=document.createElement('table');
    table.setAttribute('class','table table-hover');
    table.setAttribute('id','table');

    var thead=document.createElement('thead');
    var tbody=document.createElement('tbody');

    var tr=document.createElement('tr');
    var th=document.createElement('th');
    th.innerHTML="ID";

    var th1=document.createElement('th');
    th1.innerHTML="Name";

    var th2=document.createElement('th');
    th2.innerHTML="E-Mail";
    tr.append(th,th1,th2);
    thead.append(tr);
    table.append(thead,tbody);
    contain.append(table);

    for(var i=start;i<end;i++){
        var tr1=document.createElement('tr');

        var td=document.createElement('td');
        td.innerHTML=data[i]["id"];

        var td1=document.createElement('td');
        td1.innerHTML=data[i]["name"];

        var td2=document.createElement('td');
        td2.innerHTML=data[i]["email"];

        tr1.append(td,td1,td2)
        tbody.append(tr1);
    }


} catch (error) {
        console.log(error);
}
}

