var total=10; // changed from 5 to 10
var question=new Array()
for (i=1;i<=total;i++){ // changed from total+1 to total
    temp="choice"+i+"=new Array()"
    eval(temp)
}
var solution=new Array()

var compliments=new Array()
compliments[0]="You're worthy, like Thor with Mjolnir!"
compliments[1]="You're as sharp as Tony Stark!"
compliments[2]="You've got the heart of Captain America!"
compliments[3]="Smashing it like the Hulk!"
compliments[4]="You're unstoppable, like Black Panther!"
compliments[5]="You're thinking ahead like Doctor Strange!"
compliments[6]="You've got the brains of Bruce Banner!"
compliments[7]="You're as quick as Quicksilver!"
compliments[8]="Your knowledge is a MARVELous!"
compliments[9]="You've got moves like Natasha Romanoff!"

question[1]="What is the name of Thor's hammer?";
choice1[1]="Vanir";
choice1[2]="Mjolnir";
choice1[3]="Aesir";
choice1[4]="Norn";

question[2]="Who is Tony Stark's father?";
choice2[1]="Howard Stark";
choice2[2]="Tony Stark Sr.";
choice2[3]="Jarvis Stark";
choice2[4]="Arthur Stark";

question[3]="What is Captain America's shield made of?";
choice3[1]="Adamantium";
choice3[2]="Vibranium";
choice3[3]="Uru metal";
choice3[4]="Titanium";

question[4]="Who was able to pick up Thor's hammer in Avengers: Age of Ultron?";
choice4[1]="Tony Stark";
choice4[2]="Steve Rogers";
choice4[3]="Bruce Banner";
choice4[4]="Vision";

question[5]="What species is Loki revealed to be?";
choice5[1]="Frost Giant";
choice5[2]="Asgardian";
choice5[3]="Elf";
choice5[4]="Dwarf";

question[6]="Who is the Winter Soldier?";
choice6[1]="Bucky Barnes";
choice6[2]="Steve Rogers";
choice6[3]="Sam Wilson";
choice6[4]="Tony Stark";

question[7]="Which Infinity Stone was located on Vormir?";
choice7[1]="Time Stone";
choice7[2]="Mind Stone";
choice7[3]="Soul Stone";
choice7[4]="Power Stone";

question[8]="What was the original name of the first Iron Man suit?";
choice8[1]="Iron Suit";
choice8[2]="Mark I";
choice8[3]="War Machine";
choice8[4]="Mark IV";

question[9]="What is the real name of Black Panther?";
choice9[1]="N'Jadaka";
choice9[2]="M'Baku";
choice9[3]="T'Chaka";
choice9[4]="T'Challa";

question[10]="What is the name of Star-Lord's ship in Guardians of the Galaxy?";
choice10[1]="The Milano";
choice10[2]="The Starburst";
choice10[3]="The Enterprise";
choice10[4]="The Guardian";

solution[1]="b"; // Mjolnir
solution[2]="a"; // Howard Stark
solution[3]="b"; // Vibranium
solution[4]="b"; // Steve Rogers
solution[5]="a"; // Frost Giant
solution[6]="a"; // Bucky Barnes
solution[7]="c"; // Soul Stone
solution[8]="b"; // Mark I
solution[9]="d"; // T’Challa
solution[10]="a"; // The Milano
