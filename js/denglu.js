$(function(){

    $(".dl").click(function(){//给登录挂事件

        var zh=$(".tel").val();//获取邮箱/电话的值
        var zcmima=$(".miam").val();//获取请输入密码的值

        if( zh==="" || zcmima===""){
            alert("请完善账户名密码")
        }else{
            var a=localStorage.getItem("zh");//取出注册好的用户名
            var b=localStorage.getItem("zcmima");//取出注册好的密码

            if( a===zh ){

                if( b===zcmima ){
                    window.open("https://www.baidu.com")
                }else{
                    alert("密码错误")
                }

            }else{
                alert("用户不存在")
            }

        }


    });









});