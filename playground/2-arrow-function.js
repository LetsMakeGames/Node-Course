// const square = function (x) {
//     return x * x
// }


// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const events = {
    name: 'World Monster Truck Jam!',
    guestList: ['Mike', 'Bob', 'Jake', 'A Thousand Others'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' will be attending the ' + this.name)
        })
    }
}

events.printGuestList();