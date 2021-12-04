const button = document.querySelector('button');
const word = document.querySelector('.words');
word.style.bottom = 50 + 'px'


const debounce = (func, wait, immediate) => {
    let timeout;

    return function executedFunction() {
        let context = this;
        let args = arguments;

        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};
button.addEventListener('click', debounce(function () {
    {
        if (word.style.bottom == 50 + 'px') {
            word.style.bottom = -150 + 'px'

        } else {
            word.style.bottom = 50 + 'px'

        }

    }
}, 1000));



