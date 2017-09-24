const express = require('express')
const oneLinerJoke = require('one-liner-joke')
const getRandomJoke = oneLinerJoke.getRandomJoke()
console.log(getRandomJoke);