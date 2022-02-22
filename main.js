 const inputvalue = document.getElementById("inputValue");
 const inputObj = {};

 Object.defineProperty(inputObj,"fieldValue",{
    get() {
        return inputvalue.value;
    },
    set(newValue){
        inputvalue.value = newValue;
    }
 });