function check(n) {
    if (n == 2) {
        return 3/2 - 1/2;
    } else {
        return ((n+2)/(n+1) - (2/(n+1)*(n+1))) * check(n-1);
    }
}
 console.log(check(99));