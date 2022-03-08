const computerPlay = () => {
    const responses = ['Rock', 'Paper', 'Scissors'];
    return responses[Math.floor(Math.random() * responses.length)];
}
