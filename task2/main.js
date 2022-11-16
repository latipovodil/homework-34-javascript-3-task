let asosiy = prompt("Son va harflarni aralashtirib yozing faqat harflar chiqib keladi")

let box = '';

let i = 0;

while (i < asosiy.length) {

  
  if (!(parseInt(asosiy[i]))) {
    box += asosiy[i]
  }
  i++;

}
document.write(box)