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
    var x;
    function getSavedValuePost(v) {
        if (!localStorage.getItem(v)) {
            localStorage.setItem(v, "");
            return "";
        }
        return localStorage.getItem(v);
    }

    function postMe() {
        var title = document.getElementById("id1").value;
        var date1 = new Date()
        date1.getDate();
        var y = '<div class="klasa2"> <h4>' + title + '</h4> <h5>' + date1 + '</h5> <p> '+' </p> </div>';
        x = getSavedValuePost("id2");
        document.getElementById("id2").innerHTML = y + x;
        x = y + x;
        localStorage.setItem("id2", x);
        
        
    }
    function funk1(){
       window.open('https://www.bbc.com/culture/article/20190418-what-will-art-look-like-in-20-years!');
   } 
   function funk2(){
       window.open("https://www.rollingstone.com/feature/nirvana-inside-the-heart-and-mind-of-kurt-cobain-103770/");
   } 