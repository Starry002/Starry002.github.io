
//更改图片
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
        myImage.setAttribute('src', 'images/2.jpg');
    } else {
        myImage.setAttribute('src', 'images/1.jpg');
    }
}

//欢迎页面
var myButton = document.querySelector('button');
var myHeading = document.querySelector('#header h1');

function setUserName() {
    var myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '你好，' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '你好，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
