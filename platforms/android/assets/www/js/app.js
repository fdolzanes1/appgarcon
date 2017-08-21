$('.collection')
    .on('click', '.collection-item', function(){

    	var nomeProduto = this.firstChild.textContent;
		Materialize.toast(nomeProduto + ' Adicionado', 1000, 'rounded');

        var $badge = $('.badge', this);
        if ($badge.length === 0) {
            $badge = $('<span class="badge brown-text">0</span>')
                        .appendTo(this);
        }

        $badge.text(parseInt($badge.text()) + 1);
    }); 

$('#confirmar').on('click', function() {
    var texto = " ";

    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ' : ';
        texto += this.lastChild.textContent + ' ; ';
    });

    $('#resumo').empty().text(texto);
});

$('.modal-trigger').leanModal();

$('.collection')
    .on('click', '.badge', function() {
        $(this).remove();
        return false;
    });

$('.acao-limpar').on('click', function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.pedir').on('click', function() {
    Materialize.toast('Pedido Realizado com Sucesso', 3000, 'rounded' );
    $('#numero-mesa').val('');
    $('.badge').remove();
});