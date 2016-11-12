var oCompatible = (function(){
	
	function solveArrayMap() {
		// Production steps of ECMA-262, Edition 5, 15.4.4.19
		// Reference: http://es5.github.com/#x15.4.4.19
		if (!Array.prototype.map) {
		    Array.prototype.map = function(callback, thisArg) {

		        var T, A, k;

		        if (this == null) {
		            throw new TypeError(" this is null or not defined");
		        }

		        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
		        var O = Object(this);

		        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
		        // 3. Let len be ToUint32(lenValue).
		        var len = O.length >>> 0;

		        // 4. If IsCallable(callback) is false, throw a TypeError exception.
		        // See: http://es5.github.com/#x9.11
		        if (typeof callback !== "function") {
		            throw new TypeError(callback + " is not a function");
		        }

		        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		        if (thisArg) {
		            T = thisArg;
		        }

		        // 6. Let A be a new array created as if by the expression new Array(len) where Array is
		        // the standard built-in constructor with that name and len is the value of len.
		        A = new Array(len);

		        // 7. Let k be 0
		        k = 0;

		        // 8. Repeat, while k < len
		        while(k < len) {

		            var kValue, mappedValue;

		            // a. Let Pk be ToString(k).
		            //   This is implicit for LHS operands of the in operator
		            // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
		            //   This step can be combined with c
		            // c. If kPresent is true, then
		            if (k in O) {

		                // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
		                kValue = O[ k ];

		                // ii. Let mappedValue be the result of calling the Call internal method of callback
		                // with T as the this value and argument list containing kValue, k, and O.
		                mappedValue = callback.call(T, kValue, k, O);

		                // iii. Call the DefineOwnProperty internal method of A with arguments
		                // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
		                // and false.

		                // In browsers that support Object.defineProperty, use the following:
		                // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

		                // For best browser support, use the following:
		                A[ k ] = mappedValue;
		            }
		            // d. Increase k by 1.
		            k++;
		        }

		        // 9. return A
		        return A;
		    };
		}
	}

	function solveArrayIndexof() {
		if (!Array.prototype.indexOf)
		{
		  Array.prototype.indexOf = function(elt /*, from*/)
		  {
		    var len = this.length >>> 0;
		    var from = Number(arguments[1]) || 0;
		    from = (from < 0)
		         ? Math.ceil(from)
		         : Math.floor(from);
		    if (from < 0)
		      from += len;
		    for (; from < len; from++)
		    {
		      if (from in this &&
		          this[from] === elt)
		        return from;
		    }
		    return -1;
		  };
		}
	}

	function solveForEach() {
		if (!Array.prototype.forEach)  
		{  
		    Array.prototype.forEach = function(fun /*, thisp*/)  
		    {  
		        var len = this.length;  
		        if (typeof fun != "function")  
		            throw new TypeError();  
		  
		        var thisp = arguments[1];  
		        for (var i = 0; i < len; i++)  
		        {  
		            if (i in this)  
		                fun.call(thisp, this[i], i, this);  
		        }  
		    };  
		}  
	}

	 /**
     * JS时间转换
     * 
     * 对Date的扩展，将 Date 转化为指定格式的String
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * 例子：   
     * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
     * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
     */ 
    Date.prototype.Format = function(fmt){ 
        var o = {   
             "M+" : this.getMonth()+1,                 //月份   
             "d+" : this.getDate(),                    //日   
             "h+" : this.getHours(),                   //小时   
             "m+" : this.getMinutes(),                 //分   
             "s+" : this.getSeconds(),                 //秒   
             "q+" : Math.floor((this.getMonth()+3)/3), //季度   
             "S"  : this.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt)) 
        	fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
        	if(new RegExp("("+ k +")").test(fmt)) 
        		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        
        return fmt;   
    };

    /**
     * 解决console问题
     */
    function solveIEConsole() {
    	if (!window.console){
		    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

		    window.console = {};
		    for (var i = 0; i < names.length; ++i)
		        window.console[names[i]] = function() {}
		}
    }


	return {
		init:function() {
			solveArrayMap();
			solveArrayIndexof();
			solveForEach();
			solveIEConsole();
		}
	};
})();

oCompatible.init();
