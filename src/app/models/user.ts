export class User{
	constructor(
		public id: Number,
		public name: String,
		public email: String,
		public password: String,
		public password_confirmation: String
	){}
}