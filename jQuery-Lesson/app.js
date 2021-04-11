$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});

// 「children」は、HTML要素直下のすべての子要素を取得するときに使う

// $('button').on('click', function(){
// 「button要素がクリックされたときに、処理を実行してください」の意味

// $('ul').children().css('color','red');
// .children()は、HTML要素直下のすべての子要素を取得する
// ここでのchildrenは「ul要素の子要素」、つまり、li要素が対象になる