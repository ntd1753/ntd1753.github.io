//CPP 
#include <bits/stdc++.h>
using namespace std;

// Hàm chuyển đổi từ hệ cơ số 10 sang hệ cơ số 2
string decimalToBinary(int n) {
    if (n < 0) {
        return "0";
    }
    
    string binary = "";
    if (n == 0) {
        binary = "0";
    } else {
        while (n > 0) {
            int remainder = n % 2;
            binary = to_string(remainder) + binary;
            n /= 2;
        }
    }
    
    return binary;
}

int main() {
    int n;
    cin >> n;

    // Chuyển đổi n sang hệ cơ số 2 và hiển thị kết quả
    string binary = decimalToBinary(n);
    cout << binary << endl;

    return 0;
}
