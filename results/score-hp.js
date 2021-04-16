function scoreHp(booger) {
    if (booger <= 0) {
        return 'dead';
    }
    if (booger < 35) {
        return 'weak';
    }
    return 'healthy';
}

export default scoreHp;
