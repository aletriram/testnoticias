require('dotenv').config();
let axios = require('axios');

module.exports = async function () {

	// const q = {
	// 	query: {
	// 		Tokens: {
	// 			__args: { orderBy: new EnumType('CREATEDAT_DESC') },
	// 			id: true,
	// 			titulo: true,
	// 			entradilla: true,
	// 			createdAt: true,
	// 			portada: { url: true, fileName: true, title: true, alt: true },
	// 			gallery: { url: true, fileName: true, title: true, alt: true },
	// 			contenido: { html: true },
	// 		}
	// 	}
	// };
	let config = { headers: { Authorization: 'Bearer ' + process.env.APIROCKET_KEY } };

	let queryCount = `query MyQuery {
		_countNoticias {
			count
		}
	}`;
	let responseCount = await axios.post(process.env.APIROCKET_URL, { query: queryCount}, config);
	let records = responseCount.data.data.count;

	let query = `query MyQuery {
		AllNoticias(page: 0, perPage: ${records}) {
			id
		}
	}`;

	return await axios.post(
		process.env.APIROCKET_URL,
		{ query: query },
		config
	).then(function(response) {
		console.log(response.data.errors);
		return response.data.data.AllNoticias.map(function (value) {
			// value.permaLink = `/posts/${slugify(value.titulo, { lower: true })}`;
			return value;
		});
	}).catch(function(error) {
		console.error('\x1b[31m')
		console.error('############ ERROR obtaining POSTS ############')
		console.error(error.message);
		console.error('\x1b[0m')
	});

};