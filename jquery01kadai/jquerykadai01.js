var answer = prompt('数値を入力してください');
if (answer > 0) {
  alert('正の数です');
} else if (answer == 0 ) {
  alert('0です');
} else if (answer < 0 ) {
  alert('負の数です');
} else {
  alert('数値を入力してください');  
}