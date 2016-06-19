"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var rating_1 = require('./rating');
var log_decorator_1 = require('../decorators/log-decorator');
var perf_decorator_1 = require('../decorators/perf-decorator');
var memoize_decorator_1 = require('../decorators/memoize-decorator');
var sleep_1 = require('../helpers/sleep');
var Book = (function () {
    function Book(title, publisher) {
        this.ratings = [];
        this.title = title;
        this.publisher = publisher;
    }
    Book.prototype.addRating = function (username, rating, comment) {
        sleep_1.default(1);
        var ratingObj = new rating_1.default(username, rating, comment);
        this.ratings.push(ratingObj);
        return ratingObj;
    };
    Book.prototype.toJSON = function () {
        return {
            title: this.title,
            publisher: this.publisher,
            ratings: this.ratings
        };
    };
    __decorate([
        log_decorator_1.default
    ], Book.prototype, "title", void 0);
    __decorate([
        log_decorator_1.default
    ], Book.prototype, "publisher", void 0);
    __decorate([
        log_decorator_1.default,
        perf_decorator_1.default,
        memoize_decorator_1.default
    ], Book.prototype, "addRating", null);
    Book = __decorate([
        log_decorator_1.default
    ], Book);
    return Book;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Book;
