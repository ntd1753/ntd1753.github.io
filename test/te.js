process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
  stdin = `${stdin}${chunk}`;
}).on('end', () => {
  const lines = stdin.trim().split('\n');
  for (const line of lines) {
    process.stdout.write(`${line}\n`);
  }
});

function efficientDelivery(tankers, oilAmount) {
  function findDeliveryVariations(tankers, oilAmount, currentVariation) {
    if (oilAmount === 0) {
      // Nếu oilAmount đã được giao hết, thì thêm biến thể hiện tại vào danh sách kết quả
      results.push([...currentVariation]);
      return;
    }
    if (tankers.length === 0 || oilAmount < 0) {
      // Nếu không còn tanker hoặc oilAmount < 0, thoát khỏi đệ quy
      return;
    }
    const tanker = tankers[tankers.length - 1]; // Lấy tanker cuối cùng trong danh sách
    const maxTankers = Math.floor(oilAmount / tanker); // Tính số lượng tanker tối đa có thể sử dụng
    for (let i = 0; i <= maxTankers; i++) {
      // Thử tất cả các số lượng tanker từ 0 đến maxTankers
      currentVariation.push(i);
      findDeliveryVariations(tankers.slice(0, -1), oilAmount - i * tanker, currentVariation);
      currentVariation.pop(); // Loại bỏ lựa chọn hiện tại
    }
  }

  const results = [];
  findDeliveryVariations(tankers, oilAmount, []);
  if (results.length > 0) {
    // Nếu có ít nhất một biến thể hiệu quả, in ra tất cả các biến thể
    for (const variation of results) {
      process.stdout.write(`[${variation.join(',')}]`);
    }
    process.stdout.write('\n');
  } else {
    // Nếu không có biến thể hiệu quả, tính và in ra lượng dầu cần thêm
    const minOilNeeded = tankers.reduce((acc, tanker, index) => acc + (tanker - 1) * currentVariation[index], 0);
    process.stdout.write(`${minOilNeeded}\n`);
  }
}

function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let inputLines = [];
  let currentLine = 0;

  rl.on('line', (line) => {
    inputLines.push(line);
  });

  rl.on('close', () => {
    const [tankersStr, oilAmountStr] = inputLines[0].split(', ');
    const tankers = tankersStr.slice(1, -1).split(',').map(Number);
    const oilAmount = Number(oilAmountStr);

    efficientDelivery(tankers, oilAmount);
  });
}

if (require.main === module) {
  main();
}