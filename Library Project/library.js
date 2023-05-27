class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get ratings() {
        return this._ratings;
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let sum = 0;
        this._ratings.forEach(element => {
            sum += element;
        });
        sum = sum / this._ratings.length;
        return sum.toFixed(2);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get pages() {
        return this._pages;
    }

    get author() {
        return this._author;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

// test media

const LOTR = new Media("Fellowship of the Ring");

LOTR.title = "The Two Towers";

// test book

const nineteenEightyFour = new Book("1984", "George Orwell", 100);

// test movie

const signs = new Movie("Signs", "M. Night Shyamalan", 120);

signs.addRating(5.4);
signs.addRating(6.9);
signs.addRating(9.3);
signs.addRating(8.8);
signs.addRating(7.5);
signs.addRating(8.3);
signs.addRating(1.3);

console.log(signs.getAverageRating());