const blocks = [
    {id: 1, hash: '0x123abc', timestamp: '2026-05-28', transactions: 5},
    {id: 2, hash: '0x456def', timestamp: '2026-05-27', transactions: 8},
    {id: 3, hash: '0x789ghi', timestamp: '2026-05-26', transactions: 3}
];

function displayBlocks() {
    const html = blocks.map(b => `
        <div class="block" onclick="showDetails(${b.id})">
            <h3>Block #${b.id}</h3>
            <p>Hash: ${b.hash}</p>
            <p>Txs: ${b.transactions}</p>
        </div>
    `).join('');
    document.getElementById('blocks').innerHTML = html;
}

function showDetails(id) {
    const block = blocks.find(b => b.id === id);
    document.getElementById('details').innerHTML = `
        <h3>Block Details</h3>
        <p><strong>ID:</strong> ${block.id}</p>
        <p><strong>Hash:</strong> ${block.hash}</p>
        <p><strong>Timestamp:</strong> ${block.timestamp}</p>
        <p><strong>Transactions:</strong> ${block.transactions}</p>
    `;
}

function search() {
    const term = document.getElementById('search').value;
    console.log('Searching for:', term);
}

displayBlocks();