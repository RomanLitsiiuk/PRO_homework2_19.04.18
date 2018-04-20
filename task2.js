function daysOfWeek() {
	var weekArray = ['', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
	var revWeekArray;
	var partOfWeek;
	var entDays = prompt('Введите номера дней недели в виде интервала, например 1-3 или 3-1', '');
	var entDaysArray = entDays.split('-');
	var firstDay = +entDaysArray[0];
	var lastDay = +entDaysArray[1];

	if (firstDay <= lastDay) {
		partOfWeek = weekArray.slice(firstDay, lastDay + 1);
	} else {
		weekArray = weekArray.reverse();
		firstDay = -firstDay;
		lastDay = -lastDay;
		partOfWeek = weekArray.slice(firstDay - 1, lastDay);
	}

	partOfWeek = partOfWeek.join(', ');
	console.log('Выбранный вами интервал соответствует дням:');
	console.log(partOfWeek);
}

daysOfWeek();
