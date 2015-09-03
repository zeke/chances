NodeList.prototype.__proto__ = Array.prototype;

document.querySelectorAll('.sqs-block-content span')
  .forEach(function(el) {
    var song = el.innerHTML;
    var parts = [
      song,
      '<a href=\'https://www.google.com/search?q=' + song + '\'>google</a>',
      '<a href=\'https://www.youtube.com/results?search_query=' + song + '\'>youtube</a>'
    ];
    el.innerHTML = parts.join(' - ');
  })
