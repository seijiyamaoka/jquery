var answer = prompt('動物の名前を入力してください');

var animals = ['パンダ', 'ライオン', 'キリン'];

var i = 0;
while (i < animals.length) {
 if (answer == animals[i]) {
     alert('入力と合致したので中断。添字は'+ i + 'です');
　   break;
　}
  alert(animals[i]);
  i++;
}