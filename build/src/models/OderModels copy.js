"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMoldes = void 0;
class OrderMoldes {
    constructor(status, total, transactionId, createdAt, updatedAt, customer, customerId, orderItems) {
        this.status = status;
        this.total = total;
        this.transactionId = transactionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customer = customer;
        this.customerId = customerId;
        this.orderItems = orderItems;
    }
}
exports.OrderMoldes = OrderMoldes;
