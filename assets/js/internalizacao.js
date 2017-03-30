/*global i18n */

var Internacionalizacao = {

	LANGUAGES_AVAILABLE : [ 'en-CA', 'pt-BR', 'fr-CA' ],

	/*
	 * Inicializa arquivo de traducao de acordo com a lib i18Next.
	 * Veja mais detalhes aqui:
	 */
	init : function() {
		var language = Internacionalizacao.getLanguage();

		// detecta a lingua do browser e se nao tiver a desejada, setamos uma default
		if (!(Internacionalizacao.LANGUAGES_AVAILABLE.indexOf(language) > -1)) {
			language = Internacionalizacao.LANGUAGES_AVAILABLE[0]; // default en-US
		}


		i18n.init({
			lng : language,
			load : 'current'
		}, function(t) {
			Internacionalizacao.translateElements(t);
		});
	},

	/*
	 * Detecta a linguagem atual do browser do usuario
	 * @return linguagem atual, exemplo: pt-BR, en-US...
	 */
	getLanguage : function() {
		var userLang = navigator.language || navigator.userLanguage;
		return userLang;
	},

	/*
	 * Funcao que traduz todos os elementos que possuem data-i18n e substitui
	 * pela traduz contida em sua chave.
	 *
	 * O arquivo deve estar em <locales/<sua_pasta_idioma>/arquivo_traducao.json>.
	 */
	translateElements : function(t) {
		var elements, element;

		elements = document.querySelectorAll('[data-i18n]');

		for (var index = 0; index < elements.length; index++) {
			element = elements[index];
			element.innerHTML = t(element.getAttribute('data-i18n'));
		}
	}
};

// inicializar biblioteca de traducao i18Next
Internacionalizacao.init();
