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
	"https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/321240163_2519931464849453_8608057049667200616_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WInlSgvBkzcAX-Ri-To&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfBsmdfclERiBoKZ0iKzRzXqylryQ3eorMWC2GINgaLw1g&oe=63E79BC3"

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
