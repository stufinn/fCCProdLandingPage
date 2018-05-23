// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  const targetButton = document.getElementById('targetButton'); // needs to be global scope for event listener to access


  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function swapReview() {

    var targetElement, reviewListLength;
    
    var reviewList = [
      '<h3>"Works perfectly for all my right curved bananas."<br><div id="quoteAttr">- Danielle</div></h3>',
      '<h3>"NOT great for cereal!!"<br><div id="quoteAttr">- Thumpin&apos;</div></h3>',
      '<h3>"Once I figured out I had to peel the banana before using - it works much better."<br><div id="quoteAttr">- Uncle Pookie</div></h3>',
      '<h3>"It only works if you have a banana and these are not included..."<br><div id="quoteAttr">- Nadja</div></h3>',
      '<h3>"We LOVE it!!! Looks great on the wall too!!!"<br><div id="quoteAttr">- yarvet</div></h3>',
      '<h3>"There is a steep learning curve with this product (no pun intended). "<br><div id="quoteAttr">- Justin C.</div></h3>',
      '<h3>"...we&apos;ve even incorporated it into our lovemaking."<br><div id="quoteAttr">- Mrs Toledo</div></h3>'];


    reviewListLength = reviewList.length;
    targetElement = document.getElementById('reviewContainer');
    targetElement.innerHTML = reviewList[getRandomInt([reviewListLength])];
  }

  //listen for click on button
  targetButton.addEventListener('click', swapReview, false);