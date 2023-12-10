let coachName = document.querySelectorAll('input')[0];
let uniName = document.querySelectorAll('input')[1];
let coachEmail = document.querySelectorAll('input')[2];
let button = document.querySelector('button');
let link = document.querySelector('a');
let video = "https://youtu.be/1lDJlf56t1E?feature=shared/"
// Show result
button.addEventListener('click', () => {
    
  link.href = "mailto:"+coachEmail.value+"? &subject=Andoni Soccer&body=Hello Coach " + coachName.value + ",%0D%0A%0DMy name is Andoni Ybanez and I recently graduated high school at Collège Miles Macdonell Collegiate, in Winnipeg, Canada. I am keen to further both my soccer career and education and feel that " + uniName.value + " would be the right place to pursue my ambitions.%0D%0A%0DI am a versatile player who can easily play many positions on the field such as winger, striker, or midfielder. I currently play for Soccer’s Best Academy, an elite program in Winnipeg, which trains ambitious players, like myself, who seek to play at a college and eventually a professional level.%0D%0A%0AOff the field I was previously enrolled in a program similar to the Advanced Placement Program called the International Baccalaureate Program. Even though this is a demanding academic program, I successfully maintained a solid 4.0 GPA. I would like to pursue studies in engineering, history or architecture but I am open to other career paths. Currently I am training with my academy while I await my next opportunity.%0D%0A%0DI am an ambitious and dedicated person who consistently works hard to reach his goals on the field and in the classroom. I am a mature player who works well with peers as well as coaches. I encourage you to contact my Coach Alex Esteves. His contact information is as follows:%0D%0AEmail: alexsoccercamps@yahoo.ca%0D%0APhone number: (204)-996-196%0D%0A%0DHere is the link to my highlight video:%0D%0A" + video + "%0D%0A%0DThank you for your time %0D%0A%0DSincerely,%0D%0AAndoni Ybanez";
  navigator.clipboard.writeText("and consideration and I hope to hear from you in the near future!");
  link.click();
});
//  " + "" + "