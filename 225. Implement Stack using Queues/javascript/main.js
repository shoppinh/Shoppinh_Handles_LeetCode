//  Using two queues
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue2.push(x);
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
    }
    this.queue1 = this.queue2;
    this.queue2 = [];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};


//  Using one queue
var MyStack2 = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack2.prototype.push = function(x) {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
    }
};

/**
 * @return {number}
 */
MyStack2.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack2.prototype.top = function() {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack2.prototype.empty = function() {
    return this.queue.length === 0;
};
