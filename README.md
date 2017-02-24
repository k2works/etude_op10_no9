
[![CircleCI](https://circleci.com/gh/k2works/etude_op10_no9.svg?style=svg)](https://circleci.com/gh/k2works/etude_op10_no9)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/k2works/etude_op10_no6/master/LICENSE.txt)
[![npm version](https://badge.fury.io/js/etude-op10-no9.svg)](https://badge.fury.io/js/etude-op10-no9)


### etude-op10-no9

[Getting start](./docs/README.md)


## install

```bash
npm install etude-op10-no9
```

## usage

```js
var BowlingGame = require('etude-op10-no9');

var game = new BowlingGame;

game.start();

game.add(5); //Set score 
game.add(4);

game.score();  //Get total score
game.scoreForFrame(1);   //Get score by frame

game.end();
```

## license

MIT. Copyright (c) [k2works](http://feross.org).