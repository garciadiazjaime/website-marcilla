// click function added to search icon
$('#btn_send_quote').click(function() {
  var fields = ['contact_name', 'contact_email', 'contact_company', 'contact_telephone', 'contact_messsage'];
  var isFormReady = true;
  var msg = '';
  var API_URL = 'http://127.0.0.1:3000/';
  $('#contact_msg').text('').removeClass();

  for (var index in fields) {
    var label = $('#' + fields[index]).parent().parent().find('label');
    var field = $('#' + fields[index]);
    if (!field.val()) {
      label.addClass('text-danger');
      isFormReady = false;
    }
    else {
      label.removeClass('text-danger');
      msg += label.text() + ': ' + field.val() + '<br />';
    }
  }
  if (isFormReady) {
    $('#contact_msg').text('enviando...').addClass('text-info');
    var replyto = $('#contact_email').val() || 'noreply@marcilla.com';
    var fromname = $('#contact_name').val() || '';

    var products = getProducts();
    if (products.length) {
      msg += '<br /><b>Productos:</b><br /><br />' + products;
      var data = {
        fromname: fromname,
        replyto: replyto,
        subject: 'Web :: Solicitud de Pedido',
        html: msg
      };
      $.post(API_URL + 'api/send_email', data, function(data) {
        if (data.status) {
          window.location.href = '/basket/clean';
        }
        else {
          $('#contact_msg').text('Lo sentimos, favor de intentar mas tarde.')
            .addClass('text-danger');
          $('#btn_send_quote').parent().parent().hide();
        }
      })
      .fail(function() {
        $('#contact_msg').text('Lo sentimos, favor de intentar mas tarde.')
          .addClass('text-danger');
        $('#btn_send_quote').parent().parent().hide();
      });
    }

  }
  else {
    $('#contact_msg').text('Favor de llenar todos los campos.')
      .addClass('text-danger');
  }
  return false;
});

function getProducts() {
  var rows = $('.basket-items > .row');
  var response = '';
  var name;
  var quantity;
  var code;
  var image;
  var serverUrl = 'http://www.tienda.marcilla.com.mx/';

  if (rows.length) {
    for (var i = 0, len = rows.length; i < len; i++) {
      name = $($(rows[i]).find('.product_name')[0]).text();
      quantity = $($(rows[i]).find('.checkout-quantity input')[0]).val();
      code = $($(rows[i]).find('.product_upc')[0]).text();
      image = $($(rows[i]).find('img')[0]).attr('src');
      response += '<tr><td>' + name + '</td>';
      response += '<td align="center">' + quantity + '</td>';
      response += '<td>' + code + '</td>';
      response += '<td><img src="' + serverUrl + image + '" /></td></tr>';
    }
    if (response) {
      response = '<table border="1" cellpadding="10"><tr><th>Nombre</th><th>Cantidad</th><th>Código</th><th>Imágen</th></tr>' + response + '</table>';
    }
  }
  return response;
}
