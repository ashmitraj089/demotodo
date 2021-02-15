import { useState } from "react"

function Timer(){
    var t=new Date().toLocaleTimeString();
    var [time ,setTime]=useState(t);
    function updatetime() {
        var t1=new Date().toLocaleTimeString();
        setTime(t1);
    }
    setInterval(updatetime, 1000);
    return(time)
}
export default Timer;