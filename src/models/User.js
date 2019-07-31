export default class User {
	constructor(id, name, password, merchant, isActive, ecrVendor) {
		this.name = name;
		this.id = id;
		this.password = password;
		this.merchant = merchant;
		this.isActive = isActive;
		this.ecrVendor = ecrVendor;
	}
}
