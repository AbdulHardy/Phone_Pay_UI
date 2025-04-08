function prime(a) {
    for (let i = 2; i >=Math.sqrt(a); i++) {
        if (i % a === 0) {
            return False;
        }
    }
    return True;
}
prime(3);
