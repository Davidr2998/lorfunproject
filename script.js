
//Wait to run your initialization code until the DOM is fully loaded. This is needed
// when wanting to access elements that are later in the HTML than the <script>.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    //The DOMContentLoaded event has already fired. Just run the code.
    afterLoaded();
}

function afterLoaded() {
    //Your initialization code goes here. This is from where your code should start
    //  running if it wants to access elements placed in the DOM by your HTML files.
    //  If you are wanting to access DOM elements inserted by JavaScript, you may need
    //  to delay more, or use a MutationObserver to see when they are inserted.


    var objeto1 = document.getElementsByClassName("bg");
    var objeto2 =  document.getElementsByClassName("ashe");
    //console.log(objeto1);

    var windowWidth = $(window).width();
    

    $(objeto1).mousemove(function(event){
        var moveX = (($(window).width()) - event.pageX) *0.025;
        $(objeto2).css('margin-left', moveX + 'px');
    });


} 
