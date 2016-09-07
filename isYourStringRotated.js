function wordRotationCheck(input, staticInput) {
    "use strict";
    
    if (input === staticInput) {
        console.log("Exact Match");
        return true;
    }
  
    if (input.length != staticInput.length) {
        console.log("Input length does not match staticInput length");
        return false;
    }
  
    var inputSort = input.split('');
    inputSort = inputSort.sort();
    inputSort = inputSort.toString();
        console.log("inputSort is " + inputSort);
    var staticInputSort = staticInput.split('');
    staticInputSort = staticInputSort.sort();
    staticInputSort = staticInputSort.toString();
        console.log("staticInputSort is " + staticInputSort);
  
    if (inputSort != staticInputSort) {
        console.log("Input does not have the same elements as staticInput");
        return false;
    }
  
    inputArr = input.split("");
    staticInputArr = staticInput.split("");
    var checkpoint = [];
  
    var j = 0;
    while (j < input.length) {
        var index = 0;
        index = input.indexOf(staticInput[0],j);
        checkpoint.push(index);
        j++;
    }
  
    checkpoint = checkpoint.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
  
        console.log("checkpoints are " + checkpoint);
  
    for (var i = 0; i < checkpoint.length; i++) {
            console.log("Starting slice check");
        var currentCheck = checkpoint[i];
        var beginning = inputArr.slice(currentCheck);
        beginning = beginning.join('');
        var end = inputArr.slice(0, currentCheck);
        end = end.join('');
            console.log("beginning is " + beginning);
            console.log("end is " + end);
        if (beginning + end === staticInput) {
            console.log(beginning + end + " == " + staticInput);
        return true;
        }
    }
    return false;
  
}  

wordRotationCheck("ordw","word");
