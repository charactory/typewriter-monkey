// import './style.css'
import "chota";

document.getElementById("generate_button")!.onclick = generateNoteTemplate;

function getValue(name: String) {
  return (<HTMLInputElement>(
    document.querySelector(`input[name=${name}]:checked`)
  ))?.value;
}

function generateNoteTemplate() {
  const app = getValue("appearance");
  console.log(app);
}
