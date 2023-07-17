"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(fullName, email, mobile, document, zipCode, street, number, complement, neighborhood, city, state, createdAt, updatedAt, orders) {
        this.fullName = fullName;
        this.email = email;
        this.mobile = mobile;
        this.document = document;
        this.zipCode = zipCode;
        this.street = street;
        this.number = number;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.orders = orders;
    }
}
exports.Customer = Customer;
