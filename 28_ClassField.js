class product {
  name = "상품명 없음";
  price = 0;
  static productName = "컴퓨터";
  static pruductPrice = 1000000;

  showInfo() {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
  }

  static showStaticInfo() {
    console.log(`${this.productName}의 가격은 ${this.pruductPrice}원입니다.`);
  }
}

const p = new product();
p.showInfo(); // 상품명 없음의 가격은 0원입니다.
// p.showStaticInfo();
product.showStaticInfo(); // 상품명 없음의 가격은 0원입니다.

//static은 static이 붙은 것만 사용 가능하다
