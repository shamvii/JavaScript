//Function returning another function

function interviewQuestion(job) {
	if(job === 'designer'){
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
		}else if (job === 'teacher') {
			return function(name){
			console.log('Whats subject do yu teach, ' + name + '?');
		}
		} else {
			return function(name){
				console.log('Hello ' + name + ' , what do you do?');
			}

		}
	
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Matthew');
designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Jenny');

interviewQuestion('teacher')('Maya');



