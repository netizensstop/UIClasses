
  var mathUtil =  (function (){
    var counter = 0;

    function doAddition(firstValue, secondValue) {
        counter++;
        var result = 0;
        result = firstValue + secondValue;
        return result;
    }

    function doSubstraction(firstValue, secondValue) {
        counter++;
        var result = 0; 
        result = firstValue - secondValue;
        return result;
    }

    return {
        addValues : function(a,b){
            var res = doAddition(a, b);
            return res;
        },

        subValues : function(a,b){
            var res = doSubstraction(a, b);
            return res;
        },
        doMultiplication :function (firstValue, secondValue) {
            counter++;
            var result = 0; 
            result = firstValue * secondValue;
            return result;
        },
        doDivision : function (firstValue, secondValue) {
            counter++;
            var result = 0; 
            result = firstValue / secondValue;
            return result;
        }
    

    }
   
   })();

    