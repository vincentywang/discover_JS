var redRoses = new app.singleFlower({
	name: "Red Roses",
	price: 39.95,
	color: "red",
	img: "images/redRoses.jpg",
	link: "redRose"
});

var rainbowRoses = new app.singleFlower({
	name: "Rainbow Rose",
	price: 29.95,
	color: "orange",
	link: "rainbowRoses"
});

var heirloomRoses = new app.singleFlower({
	name: "Heirloom roses",
	price: 19.05,
	img: "images/heirloomRoses.jpg",
	link: "heirloomRoses"
});

var flowerGroup = new app.FlowersCollection([
	redRoses, heirloomRoses
]);

flowerGroup.add(rainbowRoses);
flowerGroup.remove(heirloomRoses);

console.log(flowerGroup.toJSON());
