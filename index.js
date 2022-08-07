let worker =
{
    name: 'Vasya',
    surname: 'Pupkin',
    rate: 10,
    days: 31,

    getSalary() {
        return (`${this.rate}` * `${this.days}`);
    }
}

console.log(worker.getSalary());


