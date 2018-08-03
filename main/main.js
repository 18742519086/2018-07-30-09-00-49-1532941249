module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
	console.log(`o) 最大值 = ${sequence.max()}
	console.log(`o) 元素数量 = ${sequence.count()}
	console.log(`o) 平均值 = ${sequence.average()}
};

class Sequence {
  constructor(input) {
    // Write your code here
	this.input = input;
  }

  minimum() {
    // Write your code here
	return Math.min.apply(null, input);
  }

  // Write your code here
  max() {
    // Write your code here
	return Math.max.apply(null, input);
  }
  
  count() {
    // Write your code here
	return input.length;
  }
  
  average() {
    // Write your code here
	var sum = eval(input.join("+"));
         return ~~(sum/input.length*100)/100;
  
  

  }
}

