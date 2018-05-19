$(function(){

    $(".cjzh").click(function(){ //给创建账户 挂事件

        var zh=$(".nameyou").val();//获得账号的值
        var mima=$(".Field").val();//获得密码的值
        var zcmima=$("#zcmima").val();//获得再次输入密码的值

        //正则表达式
        var bds= /^[A-Za-z0-9]+$/;//由数字和26个英文字母组成的字符串

        if( zh==="" || mima==="" || zcmima==="" ){
             alert("请完善注册");

        }
        else
        {
             if( bds.test(zh))
             {//test 测试

                     if(bds.test(mima) && mima.length >= 6 && mima.length <= 12){

                             if( mima===zcmima )
                             {
                                 localStorage.setItem("zh",zh);
                                 localStorage.setItem("zcmima",zcmima);
                                 alert('成功')
                             }
                             else
                             {
                                 alert("不一致")
                             }

                     }
                     else
                     {
                         alert("密码不规范")
                     }


             }
             else
             {
                 alert("登录名不规范")
             }
        }


    });















});