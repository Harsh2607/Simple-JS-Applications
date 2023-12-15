document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('.calculateBtn button');
    calculateButton.addEventListener('click', function() {
        const billAmt = parseFloat(document.getElementById('billAmt').value);
        const tipPercent = parseFloat(document.getElementById('tipPercent').value);

        const tipAmount = (billAmt * tipPercent) / 100;

        if (!isNaN(tipAmount) && !isNaN(billAmt)) {
            const totalAmt = billAmt + tipAmount;
            document.getElementById('resultTipAmt').innerText = `Tip Amount: Rs.${tipAmount.toFixed(2)}`;
            document.getElementById('resultTotalAmt').innerText = `Total Amount: Rs.${totalAmt.toFixed(2)}`;
        } else {
            document.getElementById('resultTipAmt').innerText = 'Please enter valid values.';
            document.getElementById('resultTotalAmt').innerText = '';
        }
    });
});
