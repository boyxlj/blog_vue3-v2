export function getCurTime() {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month:any = now.getMonth(); //得到月份
    var date:any = now.getDate(); //得到日期
    //   var day = now.getDay();//得到周几
    var hour:any = now.getHours(); //得到小时
    var minu:any = now.getMinutes(); //得到分钟
    var sec:any = now.getSeconds(); //得到秒
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    //   var time = "";
    //精确到天
    // console.log(time = year + "-" + month + "-" + date);
    //精确到分
    return year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec;
}

