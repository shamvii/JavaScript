function interviewQuestions(job){
	return function(name){
		if(job === 'designer'){
			console.log(name + ', can you please explain what UX design is?');
		} else if ( job === 'teacher'){
console.log('Whats subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + ' , what do you do?');
		}
	}
}

interviewQuestions('teacher')('John');