export class ExtendedDate extends Date {
	getFormattedDate() {
		let months = [
			"січня",
			"лютого",
			"березня",
			"квітня",
			"травня",
			"червня",
			"липня",
			"серпня",
			"вересня",
			"жовтня",
			"листопада",
			"грудня"
		];
		let day = this.getDate();
		let month = months[this.getMonth()];
		return `${day} ${month}`;
	}


	isPastOrFuture() {
		let currentDate = new Date();
		if (this < currentDate) {
			return "минула";
		} else if (this > currentDate) {
			return "майбутня";
		} else {
			return "поточна";
		}
	}


	isLeapYear() {
		let year = this.getFullYear();
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	getNextDate() {
		let nextDate = new Date(this);
		nextDate.setDate(this.getDate() + 1);
		return nextDate;
	}
}

