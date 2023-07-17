"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackModels = void 0;
class SnackModels {
    constructor(snack, name, description, price, image, createdAt, updatedAt) {
        this.snack = snack;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getSnack() {
        return this.snack;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getImage() {
        return this.image;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
}
exports.SnackModels = SnackModels;
