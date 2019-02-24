$(document).ready(function(){

// jQuery Validate JS
  $("#header-contact-form").on('submit', function(event){
    event.preventDefault();

    var string = $("#header-contact-form").serialize(); // Соханяем данные введенные в форму в строку.

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function(html){
        $("#header-contact-form").slideUp(800);
        $('#answer').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;


  });

  //-
  $("#feedback-form").on('submit', function(event){
    event.preventDefault()

    var string = $("#feedback-form").serialize(); // Соханяем данные введенные в форму в строку.


    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function(html){
        $("#feedback-form").slideUp(800);
        $('#answer2').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;

  });

  $("#header-orderCall1").on('submit', function(event){
    event.preventDefault()

    var string = $("#header-orderCall1").serialize(); // Соханяем данные введенные в форму в строку.


    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function(html){
        $("#header-orderCall1").slideUp(800);
        $('#answer3').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;

  });



  $('#back').on('click',function(){
    $('.warning').css('display','none');
  });

})
