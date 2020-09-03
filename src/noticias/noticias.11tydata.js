require('dotenv').config();
let axios = require('axios');
let config = { headers: { Authorization: 'Bearer ' + process.env.APIROCKET_KEY } };


module.exports = {
	eleventyComputed: {
		computedNoticia: async data => {
			if (data.noticia) {
				console.log('generando ' + data.noticia.id);
				let query = `
				query MyQuery {
					Noticia(id: "${data.noticia.id}") {
					entradilla
					entradillaCorta
					fecha
					foto {
						url
					}
					galeria {
						url
					}
					id
					relevancia
					texto
					titulo
					}
				}
				`;
				return await axios.post(process.env.APIROCKET_URL, { query: query }, config).then(function(response) {
					let noticia = response.data.data.Noticia;
					return noticia;
				});
			} else {
				return {};
			}
		}
	}
}