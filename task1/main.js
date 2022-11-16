let calc1 = prompt("Kalkulyator saytga hush kelibsiz !!! 1-sonni kiriting(1,2,3...)")*1
let calc2 = prompt("amalni kiriting(x/-/+/:)")
let calc3 = prompt("2-sonni kiriting(1,2,3...)")*1
let javob;
do {

if (calc2 == "+") {
  javob = calc1 + calc3
  document.write(javob);
}

else if (calc2 == "-") {
  javob = calc1 - calc3
  document.write(javob);
}
else if (calc2 == "/") {
  javob = calc1 / calc3
  document.write(javob);
}
else if (calc2 == "*") {
  javob = calc1 * calc3
  document.write(javob);
}

else(
  document.write("Xato son yoki amal kiritdingiz yuqoridagi tugmani bosib qayta urunib ko'ring")
)
  
} while (false)

