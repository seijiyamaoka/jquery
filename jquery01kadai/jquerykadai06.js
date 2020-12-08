var animals = [
  {'name': 'パンダ', 'weight': 80}, 
  {'name': 'ライオン', 'weight': 200},
  {'name': 'キリン', 'weight': 300} 
];

var answer = prompt('動物の名前を入力してください');

var i = 0;
while (i < animals.length) {
 if (answer == animals[i].name) {
     alert('その動物の体重は'+ animals[i].weight + 'です');
　   break;
　}
  i++;
}