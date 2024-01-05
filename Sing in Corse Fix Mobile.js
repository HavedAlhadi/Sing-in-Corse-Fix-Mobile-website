$('#from').hide();
//المتغيرات العامة--------------------------
let NameUser="Haved";
let password=1111;
var id=0;
let count;
let DBStd; //localstorage مصفوفة خزن البيانات الى  
let index=null;
let nameStd=document.getElementById('name_std');
let AgeStd=document.getElementById('age_std');
let genderStd=$("[name=gender1]:checked").val();
let emailStd=document.getElementById('email_std');
let numphone=document.getElementById('phone_std');
let eduStd=document.getElementById('edu_std');
let tyearStd=document.getElementById('year_std');
let timeStd=$("#std_time").val()+ " "+ $("[name=std_am]:checked").val();
let eNameUser;
let epassword;
let exit1=JSON.parse(localStorage.getItem('exit'));
localStorage.setItem('exit',JSON.stringify(exit1));
let swit=JSON.parse(localStorage.getItem('mode'));
localStorage.setItem('mode',JSON.stringify(swit));
//=============================================

//دالة التحميل التلقائي
window.onload=function(e)
{    
    count=0;     //تصفير عداد المحاولات
    let r =localStorage.getItem("exit");        //ارجاع قيمة متغير حفظ بيانات المستخدم عن تحديث المتصفح
    if(r==1)
    {
        $('#from').hide();
        $('#from_login').show();
    }    
    else
    {
        $('#from').show();
        checkmode(e);
        $('#from_login').hide();
    }
}
//حدث زر تسجيل الدخول
btnLogin.onclick=function(e)
{
    e.preventDefault();
    exit1=0;    
    chickUser(e);
    localStorage.exit=(JSON.stringify(exit1));
    $('#broder_item').val("");
    $('#broder_iteme').val("");    
}         
//==============================================
//دالة التحقق من المستخدم وكلمة المرور
function chickUser(e)
{
    e.preventDefault();
    eNameUser=document.getElementById('broder_item');
    epassword=document.getElementById('broder_iteme');    
    if((eNameUser.value==NameUser)&&(epassword.value==password))
    {        
        $('#from_login').hide();
        checkmode(e);
        $('#from').show();  
        count=0;            
        messag.innerHTML="";      
    }
    else if(count==3)
    {
        $('#from_login').hide();  
        alert("يرجاء التواصل مع الإدارة"); 
        exit1=1;
        localStorage.exit=(JSON.stringify(exit1));
    }
    else
    {
        let xc=2-count;
        messag.innerHTML="باقي لديك "+ xc +" محاولة";
        $('#broder_item').val("");
        $('#broder_iteme').val("");
        exit1=1;
        localStorage.exit=(JSON.stringify(exit1));
    }    
    count+=1;    
}
//=============================================
//دالة حدث الزر خروج
eexit.onclick=function(e)
{ 
    e.preventDefault();
    if(exit1==0)
    {
        exit1=1;
        localStorage.exit=(JSON.stringify(exit1));                
    } 
    else{
        exit1=0;
        localStorage.exit=(JSON.stringify(exit1));        
    }
    $('#from').hide();
    $('#from_login').show();    

}
//==============================================
//great student DB
if(localStorage.student!=null)
{
    DBStd= JSON.parse(localStorage.student);
}
else
{
    DBStd=[];
}
//==============================================
//great student DB
if(DBStd.length>0)
{
deletAll.innerHTML='<button onclick="DeletAll()" id="claer">حذف الكل</button>';
}
else{
    deletAll.innerHTML='';
}

//تنسيق dark mode
function checkmode(e){   
    e.preventDefault();
    let m =localStorage.getItem("mode");            
    if(m==0)
    {    
            $('*').css(
              {  "background":"#222",
                "color":"#fff",
            }
            );   
            $('#Form').css({
                "background":"#111",
                "border":"1px solid #f5ca3d",
            });      
            $('#swith').css({
                "background":"#08f1e1",
                "border":"1px solid gold",
            });      
            $('#header').css({
                "background":"#066f63",
                "color":"#fff",
                "border-radius": "5%",
            });
            $('#header h1').css({
                "background":"#066f63",
                "color":"#fff",
            });
            $('#inputinfo input[type="text"]').css({
                "background":"#000",       
                "color":"#fff",        
                "border-top":"1px solid gold",
                "border-left":"1px solid gold",
                
            });
            $('#inputinfo input[type="number"]').css({
                "background":"#000",
                "color":"#fff",                    
                "border-top":"1px solid #08f9dd",
                "border-left":"1px solid #08f9dd",
                
            });
            $('#inputinfo input[type="email"]').css({
                "background":"#000",
                "color":"#fff",                    
                "border-top":"1px solid gold",
                "border-left":"1px solid gold",                    
            });
            $('#partbtn button').css({
                "border-bottom":"2px solid #08c554",
                "border-right":"2px solid #08c554",
            });
            $('#register').css({
                "border-bottom":"2px solid #be018e",
                "border-right":"2px solid #be018e",
            });
            $('#cansel').css({
                "border-bottom":"2px solid #be018e",
                "border-right":"2px solid #be018e",
            });                
            $('#Form button').css({
                "border-bottom":"2px solid #08c554",
                "border-right":"2px solid #08c554",
            });  
            $("#swith").css({
                'right': '48px',
            });                        
            $("#broder_login").css({
                "border-bottom":"2px solid #be018e",
                "border-right":"2px solid #be018e",
            });            
            $("#broder_login1").css({
                "border-bottom":"2px solid #be018e",
                "border-right":"2px solid #be018e",
            });                          
            $("#messag").css({
                'color': '#ff3636',
            });              
            $("#twitter").css({
                'background': 'url("images/twitter.png") no-repeat',
                'background-size': 'cover',
            }); 
            $("#face").css({
                'background': 'url("images/face.png") no-repeat',
                'background-size': 'cover',
            });  
            $("#snap").css({
                'background': 'url("images/snap.png") no-repeat',
                'background-size': 'cover',
            });  
            $("#inst").css({
                'background': 'url("images/inst.png") no-repeat',
                'background-size': 'cover',
            });   
            $("#whats").css({
                'background': 'url("images/whatsApp.png") no-repeat',
                'background-size': 'cover',
            });                      
    }
    else{        
        $('*').css(
            {
              "background":"#fff",
              "color":"#000",
            });   
          $('#Form').css({
              "background":"#fff",
              "border":"1px solid #f5ca3d",
          });      
          $('#swith').css({
              "background":"#090566",
          });      
          $('#header').css({
              "background":"darkgoldenrod",
              "color":"#fff",
              "border-radius": "0%"
          });
          $('#header h1').css({
              "background":"darkgoldenrod",
              "color":"#fff",
          });
          $('#inputinfo input[type="text"]').css({
              "background":"#fff",       
              "color":"#000",               
              "border-top":"1px solid gold",
            "border-left":"1px solid gold",
          });
          $('#inputinfo input[type="number"]').css({
              "background":"#fff",
              "color":"#000",              
              "border-top":"1px solid #08f9dd",
              "border-left":"1px solid #08f9dd",      
          });
          $('#inputinfo input[type="email"]').css({
              "background":"#fff",
              "color":"#000",
              "border-top":"1px solid gold",
                "border-left":"1px solid gold",                                                       
          });
          $('#partbtn button').css({
            "background":"#05439f",
            "color":"#fff",
            "border":"none",
          });
          $('#register').css({
            "background":"#05439f",
            "color":"#fff",
            "border":"none",
          });
          $('#cansel').css({
            "background":"#05439f",
            "color":"#fff",
            "border":"none",
          });                
           $('#Form button').css({
            "background":"#05439f",
            "color":"#fff",
            "border":"none",
          });
          $('#tb_reg').css({            
            "color":"#fff",            
            "border":"2px solid #05498c",
            });             
          $('#th-head').css({
            "background-color": "#696969",
         });
         $('#th-head tr th').css({
            'background-color': '#737171',
             'color': 'white',
            'border':'1px solid #666',
         });
         $('#th-head tr button').css({
            
            'background-color': '#737171',
             'color': 'white',
         });
         $("#swith").css({
            'right': '82px',
        });
        $('#from_login').css({            
            'background-color': '#846e3f',
            'color': '#fff',            
            'border': '1px solid  #f7b203',
            'border-radius': '2%',                                    
        });
        $("#broder_login,#broder_login1").css({
            'background-color': '#846e3f',
            'color': '#fff',
            "border-bottom":"2px solid #be018e",
            "border-right":"2px solid #be018e",
        });                                   
        $("#tele, #input_login,#active ,#btnLogin,#tellme,#icon_login,#midaicon,#input_login,#mico,#messag").css({
            'background-color': '#846e3f',
            'color': '#fff',
        });                           
        $("#twitter").css({
            'background': 'url("images/twitter.png") no-repeat',
            'background-size': 'cover',
        }); 
        $("#face").css({
            'background': 'url("images/face.png") no-repeat',
            'background-size': 'cover',
        });  
        $("#snap").css({
            'background': 'url("images/snap.png") no-repeat',
            'background-size': 'cover',
        });  
        $("#inst").css({
            'background': 'url("images/inst.png") no-repeat',
            'background-size': 'cover',
        });   
        $("#whats").css({
            'background': 'url("images/whatsApp.png") no-repeat',
            'background-size': 'cover',
        });   

    };
}
//زر التنقل بين الوضع الليلي والنهاري
swith.onclick=function(e)
{
    
    e.preventDefault();
    if(swit==1) 
        {swit=0;
            
            $(this).css({
                'transform': 'translateX(2px)',
            });            
            localStorage.mode=(JSON.stringify(swit));  
            console.log(localStorage);           
            checkmode(e);    
            
        }
    else{        
        swit=1;
        $(this).css({
            'transform': 'translateX(-2px)',
        });                     
        //localStorage.removeItem('mode')            
            localStorage.mode=(JSON.stringify(swit)); 
            console.log(localStorage);
            checkmode(e);         
    }    
}

//jquery 
$(document).ready(function()
{
$(".tb_reg").hide();
$("table tr:even").css("background-color","#f0f0f0");
for (var i=2022;i>=1995;i--)
$("#year_std").append("<option value='"+i+"'>"+i+"</option>");

$("[name=std_am]").click(function()
{
    var morning =["8-10","10-12"],
    evening=["12-2","2-4","4-6"];
    $("#std_time").empty();
    if($(this).val()=="صباحا")
    {
        for(var time in morning)
        $("#std_time").append("<option value='"+morning[time]+"'>"+morning[time]+"</option>");
    }
else
{
    for(var time in evening)
    $("#std_time").append("<option value='"+evening[time]+"'>"+evening[time]+"</option>")
}
});
//دالة إدخال نص فقط
$("#name_std").keyup(function(event)
{
    var name=$("#name_std").val();
    if (name.search(/[0-9]/g)!=-1)
    {
        $("#name_std").val(name.slice(0,name.length-1));
        return true;
    }
});

//دالة إختيار صورة صحيحة
$("#image_std").change(function()
{
    var img =$("#image_std").val();
    var fltar= ['jpg','jpeg','png','gif','bmp'];
    var get_ext=img.split('.');
    var get_ext=get_ext.reverse();
    if(img.length>0){
        if(fltar.indexOf(get_ext[0].toLowerCase())>-1){
            return true;
        }
        else {
            alert("يحب تحميل صورة بالامتدادات التالية: (jpg,jpeg,png,gif,bmp");
            $("#image_std").val("");
            return true;
        }
    }
    else
    {
        alert("رحاءً ارفع صورة ");
        return false;
    }
});

//دالة إضافة طالب
register.onclick=function(e)
{
        e.preventDefault();
if (chex()==true)
{   
    deletAll.innerHTML='<button onclick="DeletAll()" id="claer" class="cle">حذف الكل</button>';
    checkmode(e);
         
    $("#show").text("إخفاء");
    let newStd = 
        {
            name:nameStd.value,
            age:AgeStd.value,
            genders:$("[name=gender1]:checked").val(),
            Email:emailStd.value,
            tel:numphone.value,
            edu:eduStd.value,
            tys:tyearStd.value,
            times: $("#std_time").val()+ " "+ $("[name=std_am]:checked").val(),            
        }
        DBStd.push(newStd)
    //seve data in My DBS
    localStorage.setItem('student', JSON.stringify(DBStd))
    e.preventDefault();
    $("#name_std").val(""),
    $("#age_std").val(""),
    $("#email_std").val(""),
    $("#image_std").val(""),
    $("#phone_std").val(""),
    $("#edu_std").val("");
    showData();
}
checkmode(e);
}

//edit botton
edit.onclick=function(e)
{   e.preventDefault();
    if(chex()==true&&index!=null)
    {
    let newStd1 =
     {
        name:nameStd.value,
        age:AgeStd.value,
        genders:$("[name=gender1]:checked").val(),
        Email:emailStd.value,
        tel:numphone.value,
        edu:eduStd.value,
        tys:tyearStd.value,
        times:time= $("#std_time").val()+ " "+ $("[name=std_am]:checked").val(),
      }   
        DBStd[index]= newStd1;
        localStorage.student= JSON.stringify(DBStd); 
        clearinput(e); 
        showData();
    }
    else{
        alert("!لم تختر عنصر ><");
    }    
}

//toggel text Show
$("#show").on("click",function(e)
{
e.preventDefault();
var name=$(this).text();
if(name=="عرض")
 $(this).text("إخفاء");
else
 $(this).text("عرض");
$(".tb_reg").fadeToggle("slow");
showData();
});

///botton cansel
$("#cansel").on("click",function(e)
{
e.preventDefault();
    if(chex!=true)
    {    
        clearinput(e);
    //$(".tb_reg").hide();
    //$("#show").text("عرض");
    }    
});

///botton print 
$("#print").on("click",function(e)
{
e.preventDefault();
$('#input').hide();
$('#header').hide();
$('#Form').css({
    'border':'none',
});
$(".tb_reg").show();
window.print();
$("*").show();
$("#from_login").hide();
});
});

//---------دالة تحديث الجدول
function showData()
{
    $(".tb_reg").show();
    let table='';
    for(let i=0;i<DBStd.length;i++)
    {
        table += `
        <tr> 
            <td>${i}</td>
            <td>${DBStd[i].name}</td>
            <td>${DBStd[i].age}</td>
            <td>${DBStd[i].genders}</td>
            <td>${DBStd[i].Email}</td>
            <td>${DBStd[i].tel}</td>
            <td>${DBStd[i].edu}</td>
            <td>${DBStd[i].tys}</td>
            <td>${DBStd[i].times}</td>
            <td><button onclick ="delet(${i})" id="del" >X</button></td>
            <td><button onclick="Upd(${i})" id="Updeat">U</button></td>
        </tr>
        `
    }    
    document.getElementById('tbody').innerHTML= table;
}
//---------دالة الحذف
function delet(i) {    
    DBStd.splice(i,1);
    localStorage.student= JSON.stringify(DBStd);    
    if(DBStd.length<1)
    {    
    deletAll.innerHTML='';
    }
    showData();
}

// function DeletAll
function DeletAll(){
    index=null;
    swit=JSON.parse(localStorage.getItem('mode'));
    localStorage.clear();
    localStorage.setItem('mode',JSON.stringify(swit));
    DBStd.splice(0);    
    showData();
    deletAll.innerHTML='';
}

// function Updeat
function Upd(i)
{    
    index=i;    
    $("#name_std").val(DBStd[i].name);
    $("#age_std").val(DBStd[i].age);  
    if(DBStd[i].genders=="أنثى"){female.click();}
    else{male.click();}
    if(DBStd[i].times.search("صباحا")!=-1){mor.click();}
    else{eve.click();}    
    $("#email_std").val(DBStd[i].Email);
    $("#phone_std").val(DBStd[i].tel);
    $("#edu_std").val(DBStd[i].edu);
    $("#year_std").val(DBStd[i].tys);
    let arr=DBStd[i].times.split(' ');
    $("#std_time").val(arr[0]);
    showData();     
}

//function clear tool input 
function clearinput(e)
{
    e.preventDefault();
    $("#name_std").val(""),
        $("#age_std").val(""),
        $("#email_std").val(""),
        $("#image_std").val(""),
        $("#phone_std").val(""),
        $("#edu_std").val(""); 
}
// function check input not empty
function chex()
{   
    //||$("#image_std").val()==""
    if($("#name_std").val()==""||$("#age_std").val()==""||$("#phone_std").val()==""||$("#email_std").val()==""||$("#edu_std").val()==""||$("#year_std").val()=="")
    {            
      alert("!يجب الأ يوجد حق فارغ ><");      
    return false;
    }
    else {return true;}
}
