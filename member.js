function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["js", "html", "css"],
        salary: 2000,
        bonus: 100,
        addSkill: function (skill) {
            this.skills.push(skill);
        },
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (salary) {
            this.salary = salary;
        },
        getBonus: function () {
            return this.bonus;
        },
        setBonus: function (bonus) {
            this.bonus = bonus;
        },
        getTotalSalary: function () {
            return this.salary + this.bonus;
        }
    };
    return member;
}