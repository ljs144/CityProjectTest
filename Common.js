function  requestMethod(par1,par2,par3) {


    var xhr = new XMLHttpRequest();
//第二步，与服务端建立连接（get/post),连接那个服务器，用连接服务器的哪个接口
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/aboutus');
//设置请求头，告诉服务器传递的数据是以表单的形式传递
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//第三步：向服务器传参

    xhr.send();
//第四步：接收服务器返回的数据
    xhr.onreadystatechange = function () {
        //readState=4代表数据请求完成，status=200代表成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText包含服务端返回的数据
            var responseData = JSON.parse(xhr.responseText);
            var obj = responseData.data;
            var title_tag = document.getElementById("title");
            var subTitle_tag = document.getElementById("subTitle");
            var info_tag = document.getElementById("info");
            window.localStorage.setItem("platform_title", obj.title);
            window.localStorage.setItem("platform_subTitle", obj.subTitle);
            window.localStorage.setItem("platform_info", obj.info);

            title_tag.innerHTML = obj.title;
            subTitle_tag.innerHTML = obj.subTitle;
            info_tag.innerHTML = obj.info;


        }
    }
}

