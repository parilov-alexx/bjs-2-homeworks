class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		};
		for (let index = 0; index < this.alarmCollection.length; index++) {
			if (this.alarmCollection[index].time === time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		}

		let alarmInfo = new Object();
		alarmInfo.time = time;
		alarmInfo.callback = callback;
		alarmInfo.canCall = true;
		return this.alarmCollection.push(alarmInfo);
	}

	removeClock(time) {
		let newCollection = this.alarmCollection.filter(item => item.time !== time);
		return this.alarmCollection = newCollection;
	}

	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}
	start() {
		let checkClock = (clock) => {
			let alarm = this.getCurrentFormattedTime();
			if (clock.time === alarm && clock.canCall === true) {
				clock.canCall = false;
				return clock.callback();
			}
		}
		if (this.intervalId === null) {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(clock => checkClock(clock));
			}, 1000);
		}
		return;
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(clock => {
			clock.canCall = true;
		})
	}

	clearAlarms() {
		stop();
		this.alarmCollection = []
	}
}