import _ from 'lodash'
require("./index.scss");

let contents = document.getElementById('contents');

// Render Hello ,webpack
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.map(['Hello','webpack'], function(item){
    return item + ' ';
  });

  return element;
}

contents.appendChild(component());