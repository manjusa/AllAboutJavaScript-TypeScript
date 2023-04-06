export {}; //otherwise throws compilation error

let firstName: string = "Manju";
//firstName = 111;//gives an error

//EG 2
function test(paramName: string) {
  console.log(paramName);
}
test("aa");
test(1);
