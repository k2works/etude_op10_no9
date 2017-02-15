import './index.css';
import _ from 'lodash'
require("./index.scss");

let contents = document.getElementById('contents')

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

// ES2015 arrow function
[1,2,3].map(n => console.log(n + 1));

// ES2015 Class
import Human from '../lib/human';
var obj = new Human('BABEL');
var name = obj.hello();
contents.appendChild(render(name));

// Render ES2015 Class Object name
function render (name) {
  var element = document.createElement('div');
  element.setAttribute('class', 'Contents__name');

  /* lodash is required for the next line to work */
  element.innerHTML = name;

  return element;
}

// Rnder Images
import jpg from './images/image.jpg'
import png from './images/image.png'

var box = document.getElementById('box');
var imgJpg = document.createElement('img');
imgJpg.src = jpg;
box.appendChild(imgJpg);

var imgPng = document.createElement('img');
imgPng.src = png;
box.appendChild(imgPng);
