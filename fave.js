var timeOutValue = 100;     
var setTimeToHide_ID, mItem;

function showmenu(obj) {
    if (mItem) mItem.style.display = 'none';

    mItem = document.getElementById(obj);
    mItem.style.display = 'block';
}

function setTimeToHide() { 
    setTimeToHide_ID = window.setTimeout(HideMenu, timeOutValue); 
}

function HideMenu() { 
    if (mItem) mItem.style.display = 'none'; 
}      

function ReSetTimer() {
    if (setTimeToHide_ID) {
        window.clearTimeout(setTimeToHide_ID);
        setTimeToHide_ID = 0;
    }
};