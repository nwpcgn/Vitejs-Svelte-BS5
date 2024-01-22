export { _count } from './_stores'

export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))

class TrafficLight {
	constructor() {
		let count = 0
		let currentState = new Red(this)

		this.change = function (state) {
			// limits number of changes
			if (count++ >= 10) return
			currentState = state
			currentState.go()
		}

		this.start = function () {
			currentState.go()
		}
	}
}

class Red {
	constructor(light) {
		this.light = light

		this.go = function () {
			console.log('Red --> for 1 minute')
			light.change(new Green(light))
		}
	}
}

class Yellow {
	constructor(light) {
		this.light = light

		this.go = function () {
			console.log('Yellow --> for 10 seconds')
			light.change(new Red(light))
		}
	}
}

class Green {
	constructor(light) {
		this.light = light

		this.go = function () {
			console.log('Green --> for 1 minute')
			light.change(new Yellow(light))
		}
	}
}

export const run = () => {
	let light = new TrafficLight()
	light.start()
}

function action(callback, x, y) {
	var result = callback(x, y)
	console.log(result)
}

function add(x, y) {
	return x + y
}

function multiply(x, y) {
	return x * y
}

// action(add, 2, 3);           // => 5
// action(multiply, 2, 3);      // => 6
