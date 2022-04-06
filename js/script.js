// Copyright (c) 2022 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a parrallelogram.
 */
function calculate () {
  // input
  const F = parseInt(document.getElementById("fahrenheit-degrees").value)

  // process
  const celsius = ((F − 32) × 5/9)

  // output
  document.getElementById("answers").innerHTML = 'The degrees in celsius is: ' + celsius.toFixed(2) + ' °C'
}