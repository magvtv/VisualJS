function bankAccount(holder) {
    this.holder = holder

    this.getName = function () {
        return holder
    }

    this.setName = function (newHolder) {
        holder = newHolder
    }
}

let client1 = new bankAccount()
client1.holder = "Andrew Tate"
console.log(client1.getName());