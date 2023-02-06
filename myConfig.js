let MensajeAd =
	"​🚨*Alejita Gomez!*🚨 \n \n" +
	"	🎁	- Web de afiliados / referidos \n" +
	"	🤑	- Acortador con AdsTerra \n" +
	"	📈	- Página con exoclick \n" +
	"	🗺	- Redirige el tráfico a @otrosCanales o a una página web \n \n" +
	"['Click Aquí🔥'](https://www.facebook.com/reel/1890845251282668)"

/*let MensajeAd3 =
	"​🚨*Alejita Gomez!*🚨 \n \n"*/

let imagenAd =
	"https://www.facebook.com/soyalejagomez"

const N_VIDEOS = 10 //MAX 10

const MY_AD = {
	isActive: true,
	type: 3, // //defaultAd => 1 //captionAd => 2 //linksGroupAd => 3
	data: {
		ctn: MensajeAd,
		image: imagenAd,
		link: {
			text: "Canal vip ❤",
			url: "https://instagram.com/dialejagomez",
		},
		linksGroupAd: [
			[
				{
					text: "Alejandra Gomez",
					url: "https://youtube.com/@dialejagomez",
				},
			],
			[
				{
					text: "Alejita Gonez",
					url: "https://www.facebook.com/reel/568084318518171",
				},
			],
			[
				{
					text: "Alejita 😍",
					url: "https://www.facebook.com/reel/1175138776524874",
				},
			],
			[
				{
					text: "Creative Director Video",
					url: "https://www.facebook.com/reel/1502935730202328",
				},
			],
		],
	},
}

module.exports = { N_VIDEOS, MY_AD }
