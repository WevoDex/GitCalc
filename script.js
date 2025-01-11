let count = 0;
const counter = (function () {
    function clickOne() {
        count++;
        clickOne = document.getElementsByClassName("scoreText")[0].innerHTML = count;
        console.log(count);
    }
    function clickTwo() {
        count += 2;
        clickTwo = document.getElementsByClassName("scoreText")[0].innerHTML = count;
        console.log(count);
    }

    function clickThree() {
        count += 3;
        clickThree = document.getElementsByClassName("scoreText")[0].innerHTML = count;
        console.log(count);
    }

    function guestOne() {
        count++;
        guestOne = document.getElementsByClassName("guestscore")[0].innerHTML = count;
        console.log(count)
    }
    function guestTwo() {
        count += 2;
        guestTwo = document.getElementsByClassName("guestscore")[0].innerHTML = count;
        console.log(count)
    }
    function guestThree() {
        count += 3;
        guestThree = document.getElementsByClassName("guestscore")[0].innerHTML = count;
        console.log(count)
    }
    return {
        clickOne,
        clickTwo,
        clickThree,
        guestOne,
        guestTwo,
        guestThree
    }
})();