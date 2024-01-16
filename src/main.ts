// import './style.css'
import "chota";

document.getElementById("generate_button")!.onclick = generateNoteTemplate;

function getValue(name: String) {
  return (<HTMLInputElement>(
    document.querySelector(`input[name=${name}]:checked`)
  ))?.value;
}

function generateNoteTemplate() {
  let output : HTMLTextAreaElement | null = <HTMLTextAreaElement>(document.getElementById("note_output"));
  const app = getValue("appearance");
  const beh_coop = getValue("beh_coop");
  
  output!.value = "Appearance: " + app + "\n" + "Behaviour: " + beh_coop;
  console.log(app);
}
