import _ from 'lodash';

function main() {
    var element = document.getElementById('message');

    /* lodash is used here for bundling demonstration purposes */
    element.innerHTML = _.join(['This', 'is', 'a', 'test'], ' ');
}

document.addEventListener('DOMContentLoaded', main);
