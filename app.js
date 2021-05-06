'use strict'
// Node.jsのコマンドラインの引数が入った配列
// 0 番には node コマンドのファイルのパスが入り、
// 1 番には実行しているプログラムのファイルのパスが入る、
// という決まりがあるため2番目を指定
// 条件付き論理和は左の値がFalsyの場合右の値を使う
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log(sum);