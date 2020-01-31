var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
var chnUnitSection = ["","万","亿","万亿","亿亿"];
var chnUnitChar = ["","十","百","千"];

var numToChn = function(num){
      var index =  num.toString().indexOf(".");
      if(index != -1){
          var str = num.toString().slice(index);
          var a = "点";
              for(var i=1;i<str.length;i++){
                     a += chnNumChar[parseInt(str[i])];
               }
          return a ;
      }else{
          return "";
      }
}

function sectionToChinese(section){
    var str = '', chnstr = '',zero= false,count=0;
    while(section>0){
         var v = section % 10;
         if(v ==0){
             if(zero){
                 zero = false;
                 chnstr = chnNumChar[v] + chnstr; 
             }      
         }else{
             zero = true;
             str = chnNumChar[v];
             str += chnUnitChar[count];
             chnstr = str + chnstr;
         }
         count++;
         section = Math.floor(section/10);
    }
    return chnstr;
}

function TransformToChinese(num){
         var a = numToChn(num);
         num = Math.floor(num);
          var unitPos = 0;
          var strIns = '', chnStr = '';
          var needZero = false;
         
          if(num === 0){
                return chnNumChar[0];
          } 
          while(num > 0){
                var section = num % 10000;
                if(needZero){
                  chnStr = chnNumChar[0] + chnStr;
                }
                strIns = sectionToChinese(section);
                strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
                chnStr = strIns + chnStr;
                needZero = (section < 1000) && (section > 0);
                num = Math.floor(num / 10000);
                unitPos++;
          }
         
         return chnStr+a;
}