class Home extends HTMLElement {
    constructor () {
        super();
        this.name;
        this.surname;
    }

    static get observedAttributes() {
        return ["name", "surname"];
    }

    attributeChangeCallback(nameAtr, oldValue, newValue) {
         switch (nameAtr) {
             case "name":
                 name = newValue;
                 break;
            case "surname":
                surname = newValue;
                break;
         }
    }

    connectedCallBack() {
        this.innerHTML ="";
    }
}