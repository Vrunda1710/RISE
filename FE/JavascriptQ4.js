document.getElementById("calculate-btn").addEventListener("click", function() {
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    // const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    if ((billAmount) > 50 && (billAmount)<300)
    {
            const tipAmount = (billAmount * 15) / 100;
            document.getElementById("tip-amount").textContent = `Tip Amount: ${tipAmount}`;
            const totalValue = (billAmount + tipAmount);
            document.getElementById("total-value").textContent = `Total Value: ${totalValue}`;
    }
    else
    {
        const tipAmount = (billAmount * 20) / 100;
        document.getElementById("tip-amount").textContent = `Tip Amount: ${tipAmount}`;
        const totalValue = (billAmount + tipAmount);
        document.getElementById("total-value").textContent = `Total Value: ${totalValue}`;
    }
   
    // if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
    //     const tipAmount = (billAmount * tipPercentage) / 100;
    //     document.getElementById("tip-amount").textContent = `Tip Amount: ${tipAmount}`;
    //     const totalValue = (billAmount+tipAmount);
    //     document.getElementById("total-value").textContent = `Total Value: ${totalValue}`;
    // } else {
    //     document.getElementById("tip-amount").textContent = "Please enter valid numbers.";
    // }
});