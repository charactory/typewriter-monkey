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

  let cbt_string: String;

  if (cbt.length > 0) {
    cbt_string = "CBT: " + cbt.join(", ") + ". ";
  } else {
    cbt_string = "";
  }

  const psy_ed = [
    getValue("psy_dep"),
    getValue("psy_perf"),
    getValue("psy_procras"),
    getValue("psy_worry"),
    getValue("psy_sleep_hyg"),
  ].filter((item) => item);

  let psy_ed_string: String;

  if (psy_ed.length > 0) {
    psy_ed_string = "Psychoeducation: " + psy_ed.join(", ") + ". ";
  } else {
    psy_ed_string = "";
  }

  const other_interv = [
    getValue("motiv"),
    getValue("relax"),
    getValue("decision_b"),
    getValue("assertive"),
    getValue("val"),
    getValue("safety_plan"),
  ].filter((item) => item);

  let other_interv_string: String;

  if (other_interv.length > 0) {
    other_interv_string = other_interv.join(", ") + ".";
  } else {
    other_interv_string = "";
  }

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
  const problem_string = "Presenting Problems: \n";
  const bg_string = "Background Info: \n";

  const intervention_string =
    "Intervention: \nActive listening & validation. " +
    cbt_string +
    psy_ed_string +
    other_interv_string;

  output!.value =
    presentation_string +
    "\n\n" +
    risk_string +
    "\n\n" +
    problem_string +
    "\n\n" +
    bg_string +
    "\n\n" +
    intervention_string;
  console.log(app);
}
