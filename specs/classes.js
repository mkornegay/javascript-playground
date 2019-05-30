        class Employee {

            constructor(name) {
                this._name = name;
            }

            doWork() {
                return this._name;
            }

            get ssn() {
                return this._ssn;
            }

            set ssn(value) {
                this._ssn = value;
            }
        }
 

    let e1 = new Employee('Mike');
    let e2 = new Employee('Sam');

    console.log(e1.doWork());
    console.log(e2.doWork());
    