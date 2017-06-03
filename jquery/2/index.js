function doIt() {
  var toDos = $('.js-to-dos');
  toDos.find('.js-complete').addClass('complete');
  toDos.parent().removeClass('hidden');
}

doIt();
