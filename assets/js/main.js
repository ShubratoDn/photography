/*******************************/
// Cursor pointer
/*******************************/
    const cursor = document.querySelector("#cursor");
    document.onmousedown = () => {
        cursor.style.transform = "scale(2)";
    };
    document.onmouseup = () => {
        cursor.style.transform = "scale(1)";
    };
    document.addEventListener("mousemove",function(e){
        cursor.style.visibility = "visible";
        var x = e.clientX; 
        var y = e.clientY;
        cursor.style.left = (x-10) +"px" ;
        cursor.style.top = (y-10) +"px" ;
    });


    //// cursor design specification
    var liTag = document.getElementsByTagName('li');
    var inputTag = document.getElementsByTagName('input');
    crDesign1(liTag);
    crDesign1(inputTag);

    function crDesign1(e){
        for(var i=0; i<e.length; i++){
            e[i].addEventListener("mouseover", function(e){
                cursor.classList.add("crsMO");
            });
            e[i].addEventListener("mouseout", function(e){
                cursor.classList.remove("crsMO");
            });
        }
    }


/*******************************/
// Close button
/*******************************/
// var body  = document.getElementById("#body");
// var iEle = document.createElement("i");
// iEle.classList.add("fa-solid");

/*******************************/
// nav Share button
/*******************************/
var shrBtn = document.querySelector("#share-btn");
var shrBox = document.querySelector("#share-box");
var shrIcon = document.querySelector("#share-icon");

shrBtn.addEventListener('click', function(){
    shrBox.classList.toggle("active");
});

/*******************************/
// nav Subscribe button
/*******************************/
var sbBtn = document.querySelector("#sb-btn");
var sbBox = document.querySelector("#sb-box");
var sbExit = document.querySelector("#sb-exit");

sbBtn.addEventListener('click', function(){
    sbBox.classList.toggle("active");
});
sbExit.addEventListener('click', function(){
    sbBox.classList.toggle("active");
});



/*******************************/
// LandPage Carousel
/*******************************/
var carousel = $('#landpage .owl-carousel');
var prevIcon = '<i class="fa-solid fa-angle-left"></i>';
var nextIcon = '<i class="fa-solid fa-angle-right"></i>';

carousel.owlCarousel({
    autoplay:false,
    autoplayTimeout:5000,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    lazyLoad: true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        }
    }
})

// carousel.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

// eta use korle mousewheel event kaj kore

// =================================