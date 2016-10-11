function Human(){
	this.name = 'Vasya';
	this.age = 25;
	this.sex = 'male';
	this.height = 175;
	this.weight = 70;
	}
	
function Worker(){
	this.job = 'McDonalds';
	this.money = 5000;
	this.work = function(){
		alert("Im working now!")
		}
	}
	
function Student(){
	this.study = 'University';
	this.money = '800';
	this.movie = function(){
		alert("Im wathcing movie now!")
		}
	}
	
	
	Worker.prototype = new Human();
	Student.prototype = new Human();
	
	
	var WorkerAlex = new Worker();
	var StudentPetya = new Student();
	
	console.log('rabotnik', WorkerAlex.age);
	console.log('uchenik', StudentPetya.sex);