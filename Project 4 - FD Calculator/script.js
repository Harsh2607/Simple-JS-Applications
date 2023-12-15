function cal_final_amt()
{
    //get values from form
    const principle_sum = parseFloat(document.getElementById('principle').value);
    const interest_rate = parseFloat(document.getElementById('interest').value);
    const time_period = parseFloat(document.getElementById('time').value);

    //calculate the final sum
    const final_amt = principle_sum + (principle_sum * interest_rate * time_period) / 100;

    //add final sum to the display
    document.getElementById('result').innerText = `Maturity Amount: ${final_amt.toFixed(2)}`
}

//call the function when CALCULATE is clicked
document.getElementById('btn-calculate').addEventListener('click',cal_final_amt)