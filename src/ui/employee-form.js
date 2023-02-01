import { employeeConfig } from "../config/employee-config.js";

export class EmployeeForm {
    #formElement;
    #citiesElement;
    #countriesElement;
    #inputElements
    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="employee-form">
            <input required name="name" placeholder="enter employee name" class="form-input">
            <input required name="birthYear" type="number" placeholder="enter birthYear" class="form-input">
            <input required name="salary" type="number" placeholder="enter salary" class="form-input">
            <div class="form-select-group">
                <label>Select Country</label>
                <select name="country" id="countries" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-select-group">
                <label>Select City</label>
                <select name="city" id="cities" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-buttons">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
        `
        this.#formElement = document.getElementById("employee-form");
        this.#countriesElement = document.getElementById("countries");
        this.#citiesElement = document.getElementById("cities");
        this.#inputElements  = document.querySelectorAll("#employee-form [name]");
        this.setCountries();
        this.setCities();
        this.#countriesElement.addEventListener("change", () => this.setCities())
    }
    setCountries() {
        this.#countriesElement.innerHTML = Object.keys(employeeConfig.countries)
        .map(country => `<option value="${country}">${country}</option>`)
    }
    setCities() {
        this.#citiesElement.innerHTML = employeeConfig.countries[this.#countriesElement.value]
        .map(city => `<option value="${city}">${city}</option>`)
    }
    addFormHandler(handlerFun) {
        this.#formElement.addEventListener('submit', (event) => {
    event.preventDefault(); //canceling default handler of "submit"
    const employeeData = Array.from(this.#inputElements)
    .reduce((res, inputElement) => {
        res[inputElement.name] = inputElement.value;
        return res;
    }, {});
   handlerFun(employeeData);
})
    }
}