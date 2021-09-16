 var names=new Array();
names[0]="yakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="paurry";
names[7]="laura";
names[8]="paula";
names[9]="jim";
//console.log(names);

for( var i=0;i<names.length;i++){
	if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
		console.log("Goodbye"+names[i])
	}
	else{
		console.log("hello"+names[i])
	}
}