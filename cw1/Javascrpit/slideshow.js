
    var slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        slideIndex += n;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        if (slideIndex < 1) {
          slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (var i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Swipe function to change slides with mouse
    var startx = 0;
    var dist = 0;
    var threshold = 150; //required min distance traveled to be considered swipe
    var allowedTime = 300; // maximum time allowed to travel that distance
    var elapsedTime = 0;
    var startTime = 0;

    function handleTouchStart(e) {
        startx = e.changedTouches[0].pageX;
        startTime = new Date().getTime();
    }

    function handleTouchMove(e) {
        dist = e.changedTouches[0].pageX - startx;
        elapsedTime = new Date().getTime() - startTime;
    }

    function handleTouchEnd() {
        if (elapsedTime <= allowedTime && Math.abs(dist) >= threshold) {
            if (dist < 0) {
                plusSlides(1);
            } else {
                plusSlides(-1);
            }
        }
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    // Button function to change slides



