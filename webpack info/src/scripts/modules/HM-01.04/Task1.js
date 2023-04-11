export class Marker {
	constructor(color, inkPercentage) {
		this.color = color;
		this.inkPercentage = inkPercentage;
	}

	print(text) {
		let textWritten = "";
		for (let i = 0; i < text.length; i++) {
			if (this.inkPercentage > 0) {
				if (text[i] !== " ") {
					textWritten += text[i];
					this.inkPercentage -= 0.5;
				} else {
					textWritten += " ";
				}
			}
			
		}
		const outputElement = document.createElement('p');
		outputElement.textContent = `Написаний текст: ${textWritten} (колір: ${this.color}, проценти: ${this.inkPercentage}%)`;
		document.body.appendChild(outputElement);
	}
}

export class RefillableMarker extends Marker {
	constructor(color, inkPercentage, maxInkPercentage) {
		super(color, inkPercentage);
		this.maxInkPercentage = maxInkPercentage;
	}

	refill() {
		this.inkPercentage = this.maxInkPercentage;
		const outputElement = document.createElement('p');
		outputElement.textContent = `Маркер поповнено (колір: ${this.color}, проценти: ${this.inkPercentage}%)`;
		document.body.appendChild(outputElement);
	}
}


