<?php
  function plusMinus($arr) {
    $positiveNumbers = (sizeof(array_filter($arr, function($element) { return $element > 0; })))/sizeof($arr);
    $negativeNumbers = (sizeof(array_filter($arr, function($element) { return $element < 0; })))/sizeof($arr);
    $zeros = (sizeof(array_filter($arr, function($element) { return $element === 0; })))/sizeof($arr);
    
    echo number_format($positiveNumbers, 6, '.', '') . PHP_EOL;
    echo number_format($negativeNumbers, 6, '.', '') . PHP_EOL;
    echo number_format($zeros, 6, '.', '');
  }
?>