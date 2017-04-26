// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data, much like Tom from MySpace
var friendsArray = [
	{
		name: "Lexi",
		photo: "https://twitter.com/LexiLockwood2",
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
		name: "Nicole",
		photo: "https://twitter.com/LexiLockwood2",
		scores: [
			"2",
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
	}
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsArray;