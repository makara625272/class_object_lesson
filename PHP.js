import Script from "./Script.js";
export default class PHP extends Script{
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log("My name is "+ this.mName);
    }
}