(() => {
  const numberInput = document.getElementById("number");
  const convertBtn = document.getElementById("convert-btn");
  const output = document.getElementById("output");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const show = (msg) => {
    output.textContent = msg;
  };

  const toRoman = (num) => {
    const pairs = [
      { val: 1000, sym: "M" },
      { val: 900,  sym: "CM" },
      { val: 500,  sym: "D" },
      { val: 400,  sym: "CD" },
      { val: 100,  sym: "C" },
      { val: 90,   sym: "XC" },
      { val: 50,   sym: "L" },
      { val: 40,   sym: "XL" },
      { val: 10,   sym: "X" },
      { val: 9,    sym: "IX" },
      { val: 5,    sym: "V" },
      { val: 4,    sym: "IV" },
      { val: 1,    sym: "I" },
    ];
    let res = "";
    let n = num;

    for (const { val, sym } of pairs) {
      while (n >= val) {
        res += sym;
        n -= val;
      }
      if (n === 0) break;
    }
    return res;
  };

  const handleConvert = () => {
    const raw = numberInput.value.trim();


    if (raw === "" || isNaN(raw)) {
      show("Please enter a valid number");
      return;
    }

    const num = Number(raw);

    if (!Number.isInteger(num)) {
      show("Please enter a valid number");
      return;
    }

    if (num < 1) {
      show("Please enter a number greater than or equal to 1");
      return;
    }

    if (num >= 4000) {
      show("Please enter a number less than or equal to 3999");
      return;
    }

    show(toRoman(num));
  };

  convertBtn.addEventListener("click", handleConvert);

  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleConvert();
    }
  });
})();