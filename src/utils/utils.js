const cloneObj = obj => {
    let str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj), newobj = JSON.parse(str); //系列化对象 //还原
    } else {
        for (let i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};
export default cloneObj;
