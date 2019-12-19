var addRippleEffect = function (e) {
    var target = e.target;
    target.classList.remove('che-ripple');
    if (target.tagName.toLowerCase() !== 'button') return false;
    console.log(target)
    target.className = target.className + ' che-ripple';
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.getElementsByTagName("html")[0].scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.getElementsByTagName("html")[0].scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}

document.addEventListener('click', addRippleEffect, false);

