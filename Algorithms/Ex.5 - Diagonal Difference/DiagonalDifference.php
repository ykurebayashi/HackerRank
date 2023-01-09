<?php
  function diagonalDifference($arr) {
    $firstDiagonal = 0;
    $secondDiagonal = 0;
    $n = count($arr);
  
    for ($i = 0; $i < $n; $i++) {
      $firstDiagonal += $arr[$i][$i];
      $secondDiagonal += $arr[$i][$n - $i - 1];
    }
  
    return abs($firstDiagonal - $secondDiagonal);
  }
?>