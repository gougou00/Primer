function getLength(str) {
	return str.replace(/[^\x00-xff]/g,"xx").length;
}

window.onload = function() {
	// 抓取所有的input标签
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0];
	var pwd = aInput[1];
	var pwd2 = aInput[2];
	var aP = document.getElementsByTagName('p');
	var name_msg = aP[0];
	var pwd_msg = aP[1];
	var pwd2_msg = aP[2];
	var count = document.getElementById('count');
	var aEm = document.getElementsByTagName('em');
	var name_length = 0;

	// var str = "adagwerwerwer";
	// var re = /(a[d-g]){2}/i;
	// alert(re.test(str));
	// 
	
	oName.onfocus = function() {
		name_msg.style.display = "block";
		name_msg.innerHTML = '<i class="ati"></i> 5-25个字符，一个汉字为两个字符，推荐使用中文会员名。'
	}

	oName.onkeyup = function() {
		count.style.visibility = "visible";
		name_length = getLength(this.value);
		count.innerHTML = name_length + "个字符";
		if (name_length == 0) {
			count.style.visibility = "hidden";
		}
	}

	oName.onblur = function() {
		// 含有非法字符
		var re = /[^\w\u4e00-\u9fa5]/g;
		if (re.test(this.value)) {
			name_msg.innerHTML = '<i class="err"></i> 含有非法字符！'
		}
		// 不能为空
		else if (this.value == "") {
			name_msg.innerHTML = '<i class="err"></i> 不能为空！'
		}
		else if (name_length > 25) {
			name_msg.innerHTML = '<i class="err"></i> 长度超过25个字符！'
		}
		else if (name_length < 6) {
			name_msg.innerHTML = '<i class="err"></i> 长度小于6个字符！'
		}
		else {
			name_msg.innerHTML = '<i class="ok"></i>OK!'
		}
	}
}