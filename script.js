document.addEventListener('DOMContentLoaded', () => {
    const freezeToggle = document.getElementById('freezeToggle');
    const digitalCard = document.getElementById('digitalCard');
    const cardStatusText = document.getElementById('cardStatusText');
    const sendMoneyBtn = document.getElementById('sendMoneyBtn');
    const transferAmount = document.getElementById('transferAmount');
    const transactionList = document.querySelector('.transaction-list');

    // Interactive Card Freeze State Logic
    freezeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            digitalCard.style.opacity = '0.4';
            cardStatusText.textContent = 'Card Status: Frozen';
            cardStatusText.className = 'status-frozen';
        } else {
            digitalCard.style.opacity = '1';
            cardStatusText.textContent = 'Card Status: Active';
            cardStatusText.className = 'status-active';
        }
    });

    // Simulated Quick Transfer Processing
    sendMoneyBtn.addEventListener('click', () => {
        const val = parseFloat(transferAmount.value);
        if (!val || val <= 0) {
            alert('Please enter a valid transfer amount.');
            return;
        }

        if (freezeToggle.checked) {
            alert('Transaction declined. Your card is currently frozen.');
            return;
        }

        // Dynamically prepend new transaction to ledger UI
        const newLi = document.createElement('li');
        newLi.className = 'transaction-item';
        newLi.innerHTML = `
            <span class="tx-name">Transfer to Instant Pay</span>
            <span class="tx-amount expense">-$${val.toFixed(2)}</span>
        `;
        transactionList.insertBefore(newLi, transactionList.firstChild);
        
        // Reset field value and provide feedback
        transferAmount.value = '';
        alert(`Successfully transferred $${val.toFixed(2)}!`);
    });
});
