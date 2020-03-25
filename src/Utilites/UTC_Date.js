export function formatDate(utcSeconds){
    var date = new Date(0); // The 0 sets the date to epoch time
    date.setUTCSeconds(utcSeconds);
    var yyyy = date.getFullYear();
    var MM = date.getMonth() + 1;
    var dd = date.getDate();
    if(dd < 10) dd = '0' + dd;
    return `${dd}/${MM}/${yyyy}`;
}

export function formatFullDate(utcSeconds){
    var date = new Date(0); // The 0 sets the date to epoch time
    date.setUTCSeconds(utcSeconds);
    var yyyy = date.getFullYear();
    var MM = date.getMonth() + 1;
    var dd = date.getDate();
    if(dd < 10) dd = '0' + dd;
    var hh = date.getHours();
    if(hh < 10) hh = '0' + hh;
    var mm = date.getMinutes();
    if(mm < 10) mm = '0' + mm;
    var ss = date.getSeconds();
    if(ss < 10) ss = '0' + ss;
    return `${dd}/${MM}/${yyyy} ${hh}:${mm}:${ss}`;
}