var library=[

{
author: "'Bill Gates'",
title: 'The Road Ahead',
readingStatus: true
},
{
author: "'Steve Jobs'",
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: "'Mockingjay: The Final Book of The Hunger Games'",
readingStatus: false
}
];
for(var i=0;i<3;i++)
{
	if(library[i].readingStatus===true)
	{
console.log("Already read "+library[i].author + " by The "+library[i].title+".");
}
else
{
	console.log("You still need to read "+library[i].title+" by "+library[i].author+".");
}
}