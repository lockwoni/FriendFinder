// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data, much like Tom from MySpace
var friendsArray = [
	{
		name: "Lexi",
		photo: "https://pbs.twimg.com/profile_images/849462592330485760/SmW8N4jl.jpg",
		scores: [
			"5",
			"5",
			"3",
			"3",
			"4",
			"4",
			"3",
			"3",
			"5",
			"4"
		]
	},
	{
		name: "Harry",
		photo: "http://images4.fanpop.com/image/photos/24000000/Harry-Potter-HP7-p2-the-guys-of-harry-potter-24072945-500-313.jpg",
		scores: [
			"5",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2",
			"2"
		]
	},
	{
		name: "Hermione",
		photo: "https://s-media-cache-ak0.pinimg.com/originals/bd/c5/7f/bdc57ff86792bdbdee67e2c1ffbd5ef0.jpg",
		scores: [
			"5",
			"3",
			"2",
			"2",
			"4",
			"4",
			"5",
			"2",
			"5",
			"2"
		]
	},
	{
		name: "Ron",
		photo: "http://www.wallfizz.com/film-tv/harry-potter/5329-harry-potter-and-the-deathly-hallows-pt2-WallFizz.jpg",
		scores: [
			"5",
			"3",
			"1",
			"1",
			"5",
			"5",
			"1",
			"2",
			"4",
			"2"
		]
	}
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;