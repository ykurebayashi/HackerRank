<?php
  function compareTriplets($a, $b) {
    $score = array(0, 0);

    foreach ($a as $index => $value) {
      if ($value > $b[$index]) {
        $score[0]++;
      } else if ($value < $b[$index]) {
        $score[1]++;
      }
    }
  
    return $score;
  }
?>