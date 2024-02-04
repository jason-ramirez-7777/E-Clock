let time = new Date();

const getById = id => document.getElementById(id);

const getByClass = className => document.getElementsByClassName(className);

const getByTag = tag => document.getElementsByTagName(tag);

const timeFormat = time => {
    return parseInt(time) < 10 ? "0" + time : time + "";
}

const displayTime = time => {
    let h1Container = getById('h1');
    let h2Container = getById('h2');
    let m1Container = getById('m1');
    let m2Container = getById('m2');
    let s1Container = getById('s1');
    let s2Container = getById('s2');

    h1Container.innerHTML = timeFormat(time.getHours()).split("")[0];
    h2Container.innerHTML = timeFormat(time.getHours()).split("")[1];

    m1Container.innerHTML = timeFormat(time.getMinutes()).split("")[0];
    m2Container.innerHTML = timeFormat(time.getMinutes()).split("")[1];

    s1Container.innerHTML = timeFormat(time.getSeconds()).split("")[0];
    s2Container.innerHTML = timeFormat(time.getSeconds()).split("")[1];

}

displayTime(new Date());
setInterval(() => {
    displayTime(new Date());
}, 1000);