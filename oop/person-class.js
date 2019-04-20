/**
 * * Prototypal Inheritance
 * myPerson --> PersonClass.prototype --> Object.prototype --> null
 */

class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // setName(fullName) {
    //     const names = fullName.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[1]
    // }
}

class Employee extends PersonClass {
    constructor(firstName, lastName, age, position, likes) {
        // Phải gọi thằng cha
        super(firstName, lastName, age, likes)

        this.position = position
    }

    // Phương thức này được ghi đè
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }

    // Phương thức này của riêng Employee
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends PersonClass {

    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)

        this.grade = grade
    }

    getBio() {
        if (this.grade >= 70) {
            return `${this.firstName} is passing the class.`
        }
        return `${this.firstName} is failing the class.`
    }

    updateGrade(score) {
        this.grade += score
    }

}

// const student1 = new Student('John', 'Doe', 18, 66)
// student1.fullName = 'Lau Ma'
// console.log(student1.getBio())
// student1.updateGrade(8)
// console.log(student1.getBio())

// console.log(student1)



const me = new Employee('Henry', 'Chung', 27, 'Developer', ['Swimming', 'Walking', 'Eating'])
me.fullName = 'Hao Chung'
console.log(me.getBio())
console.log(me.getYearsLeft())



// const person2 = new PersonClass('Clancey', 'Turner', 51)
// console.log(person2.getBio())
