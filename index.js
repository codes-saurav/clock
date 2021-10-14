console.log('Saurav raj');

setInterval(() => {
    let date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    console.log(htime,mtime,stime);

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
    document.body.querySelector('#hrs').style.transform = `rotate(${hrotation}deg)`
    document.body.querySelector('#mins').style.transform = `rotate(${mrotation}deg)`
    document.body.querySelector('#secs').style.transform = `rotate(${srotation}deg)`
}, 1000);

setInterval(() => {
    let date = new Date();
    
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
    document.querySelector('.time').innerHTML= time
}, 1000);