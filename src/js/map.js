export default class ErrorRepository {
	constructor() {
		this.errors = new Map();
		this.errors.set(404, 'Not Found');
		this.errors.set(500, 'Internal Server Error');
	}
	translate(code) {
		if(this.errors.has(code)) {
			return this.errors.get(code);
		} else {
			return 'Unknown error'
		}
	}
}