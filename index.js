

function toggle(x) {
    for (var i = 0; i < arguments.length; i++)
        document.getElementsByClassName(arguments[i])[0].classList.toggle('active')
}
