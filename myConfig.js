let MensajeAd =
	"​🚨*Alejita Gomez!*🚨 \n \n" +
	" 😍-  @DiAlejaGomez \n \n" +
	"['Click Aquí🔥'](https://www.facebook.com/reel/1890845251282668)"

let imagenAd =
	""

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
