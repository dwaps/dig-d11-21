const app = {
  init() {
    // DECLARATIONS
    const btSubmit = document.querySelector("button#bt-submit");
    const inputTag = document.querySelector("input");
    this.resultTag = document.querySelector("#result");
    this.outputTag = document.querySelector("#output");
    
    // CONFIGURATION
    btSubmit.addEventListener('click', () => {
      const userInput = inputTag.value;
      const max = this.maxOf(userInput.split(' '));
      this.displayResult(max);
      // Reset input
      inputTag.value = '';
      inputTag.focus();
    });
  },
  maxOf(liste = []) {
    let value = 0;
    for (let listItem of liste) {
      if (listItem > value) value = +listItem;
    }
    return value;
  },
  displayResult(max) {
    this.resultTag.hidden = false;
    this.outputTag.value = max;
  }
};

app.init();
