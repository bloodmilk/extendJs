$.extend({
	//精简console.log输出
	log: function(msg){
		console.log(msg);
	},
	//比较大小
	//最小
	min: function(array){
		//array数组
		if ($.isArray(array) && array.length > 0) {
			var min_val = array[0];
			$.each(array,function() {
				min_val = min_val > this ? min_val : this;
			});
			return min_val;
		}else{
			return array;
		};
	},
	//最大
	max: function(array){
		if ($.isArray(array) && array.length > 0) {
			var max_val = array[0];
			$.each(array, function() {
				max_val = max_val > this ? max_val : this;
			});
			return max_val;
		}else{
			return array;
		};
	},
	//判断是否为空
	isEmpty: function(val){
		var o = typeof (val);
		if ($.isArray(val)) {
			o = "array";
		};
        switch (o){
            case 'string':
                return $.trim(val).length == 0 ? true : false;
                break;
            case 'number':
            	val = val.toString();
                return $.trim(val).length == 0 ? true : false;
                break;
            case 'object':
                for (var i in val){
        			return false;
    			}
    			return true;
                break;
            case 'array':
                return val.length == 0;
                break;
            default:
                return true;
        }
    },
	//判断是否为数字(暂时正则有问题)
	isNumber: function(val){
		var back = !isNaN(val);
		return back;
	},
	//判断是否为正整数
	isInt: function(val){
		var reg = /\D+/;
		return !reg.test(val);
	},
	//判断是否为邮箱
	isEmail: function(email) {
        var reg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
        return reg.test(email);
    },
    //判断是否为电话
    isTel: function(tel) {
        var reg = /^[\d|\-|\s|\_]+$/; //只允许使用数字-空格等
        return reg.test(tel);
    },
    //判断是否为手机
    isMobile: function(mobile) {
        var reg = /^1[0-9]{10}$/;
        return reg.test(mobile);
    },
    //按指定格式获取当前时间
    getLocalTime: function(format) {
        var date = new Date();
        return format
                .replace("yyyy", date.getFullYear())
                .replace("MM", (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : "0" + date.getMonth())
                .replace("dd", (date.getDate()) > 9 ? date.getDate() : "0" + date.getDate())
                .replace("HH", (date.getHours()) > 9 ? date.getHours() : "0" + date.getHours())
                .replace("mm", (date.getMinutes()) > 9 ? date.getMinutes() : "0" + date.getMinutes())
                .replace("ss", (date.getSeconds()) > 9 ? date.getSeconds() : "0" + date.getSeconds());
    },
    //字符串转化为时间格式
    parseDate: function(strTime) {
        var date = new Date(Date.parse(strTime.replace(/-/g, "/"))); //转换成Date();
        return date;
    },
    //选择框是否选中
    inp_check: function(name) {
        return $(name).is(":checked");
    },
    //返回长度(不能判断数字的长度)
    count: function(o) {
        var t = typeof o;
        if (t == 'string') {
            return o.length;
        } else if (t == 'object') {
            var n = 0;
            for (var i in o) {
                n++;
            }
            return n;
        }
        return 0;
    },
    //将form中的值转换为键值对。
    getFormJson: function(frm) {
        var o = {};
        var a = frm.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    },
    //将form转为AJAX提交
    ajaxSubmit: function(frm, fn, bf) {
        var dataPara = $.getFormJson(frm);
        $.ajax({
            url: frm.action,
            type: frm.method,
            data: dataPara,
            success: fn,
            beforeSend: bf
        });
    },
});
