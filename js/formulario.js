var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


if (localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());

}, 1000)

function mostrarFormulario(tito){
	tito.preventDefault();
	$form.slideToggle();
	$list.slideToggle();
	}

function agregarPost(e){
	e.preventDefault();
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
		
	$clone.hide();

	$list.prepend($clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();

	
}
// Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost);