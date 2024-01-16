// import './style.css'
import "chota";

document.getElementById("generate_button")!.onclick = generateNoteTemplate;

function getValue(name: String) {
  return (<HTMLInputElement>(
    document.querySelector(`input[name=${name}]:checked`)
  ))?.value;
}

function generateNoteTemplate() {
  let output: HTMLTextAreaElement | null = <HTMLTextAreaElement>(
    document.getElementById("note_output")
  );
  const app = getValue("appearance");
  const beh_coop = getValue("beh_coop");
  const beh_err = getValue("beh_err");
  const speech_rate = getValue("speech_rate");
  const speech_vol = getValue("speech_vol");

  const cbt_soc = getValue("cbt_soc");
  const cbt_abc = getValue("cbt_abc");
  const cbt_dis = getValue("cbt_dis");
  const cbt_ba = getValue("cbt_ba");
  const cbt_exp = getValue("cbt_exp");
  const cbt_experiment = getValue("cbt_experiment");
  const cbt_reinf = getValue("cbt_reinf");

  const cbt = [
    cbt_soc,
    cbt_abc,
    cbt_dis,
    cbt_ba,
    cbt_exp,
    cbt_experiment,
    cbt_reinf,
  ].filter((item) => item);
  const cbt_string = "CBT: " + cbt.join(", ");

  const presentation_string =
    "Appearance: " +
    app +
    "\n" +
    "Behaviour: " +
    beh_coop +
    "\n" +
    "Speech: " +
    speech_rate +
    ", " +
    speech_vol;

  const risk_string = "Risk: \n";
  const intervention_string =
    "Intervention: \n Active listening & validation. " + cbt_string;

  output!.value =
    presentation_string + "\n\n" + risk_string + "\n" + intervention_string;
  console.log(app);
}
