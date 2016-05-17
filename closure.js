// function outer() {
// 	var localVal = 30;
// 	return function() {
// 		return localVal;
// 	}
// }
// var func = outer(); //调用outer返回的是匿名函数
// func();	//30
// 
// 
	// document.body.innerHTML = "<div id=div1>aaa</div>"
	// 	+ "<div id=div2>bbb</div><div id=div3>ccc</div>";
	// for (var i=1; i<4; i++) {
	// 	!function(i) {
	// 		document.getElementById('div' + i).addEventListener('click',function(){
	// 			alert(i);
	// 		});
	// 	}(i);
	// }

function f1() {
	var n=999;
	function f2(){
		alert(n);
	}	//由于作用域链f2可以读取f1的局部变量n
	return f2;	//把f2作为返回值可以在外部读取f1内的变量
}

var result=f1();
result();	//999

