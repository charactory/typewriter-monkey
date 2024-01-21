// import './style.css'
import "chota";

document.getElementById("generate_button")!.onclick = generateNoteTemplate;

// const problems_textarea_editor = document.getElementById("detail_relx_conf");



function getValue(name: String) {
  return (<HTMLInputElement>(
    document.querySelector(`input[name=${name}]:checked`)
  ))?.value;
}

function formatList(list: String[], prefix = ""): String {
  let identifier_string: String;

  if (list.length > 0) {
    identifier_string = prefix + list.filter((item) => item).join(", ");
  } else {
    identifier_string = "";
  }
  return identifier_string;
}

function generateNoteTemplate() {
  let output: HTMLTextAreaElement | null = <HTMLTextAreaElement>(
    document.getElementById("note_output")
  );
  const app = getValue("appearance");

  const beh = [
    getValue("beh_coop"),
    getValue("beh_err"),
    getValue("beh_restless"),
    getValue("beh_agit"),
    getValue("beh_with"),
    getValue("beh_agg"),
  ];

  const eye_contact = getValue("beh_eye");

  const behaviour_string = formatList(beh);

  const speech_rate = getValue("speech_rate");
  const speech_vol = getValue("speech_vol");

  const mood = [
    getValue("mood_euth"),
    getValue("mood_anx"),
    getValue("mood_irr"),
    getValue("mood_dep"),
    getValue("mood_apa"),
  ];

  const mood_string = formatList(mood);

  const affect = getValue("affect");

  const thought_string = getValue("tho_organisation");

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
    getValue("psy_grief"),
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
    getValue("cog_defusion"),
    getValue("goal_setting"),
    getValue("relapse"),
    getValue("safety_plan"),
  ].filter((item) => item);

  let other_interv_string: String;

  if (other_interv.length > 0) {
    other_interv_string = other_interv.join(". ") + ".";
  } else {
    other_interv_string = "";
  }

  const presentation_string =
    "Appearance: " +
    app +
    "\n" +
    "Behaviour: " +
    eye_contact +
    ", " +
    behaviour_string +
    "\n" +
    "Speech: " +
    speech_rate +
    ", " +
    speech_vol +
    "\n" +
    "Mood: " +
    mood_string +
    "\n" +
    "Thoughts: " +
    thought_string;

  let risk_string = "Risk: " + getValue("risk_suicide");
  const previous_risk_string = getValue("risk_previous_suicide");
  if (previous_risk_string != undefined) {
    risk_string += "\n" + previous_risk_string;
  }
  const problem_string = "Presenting Problems: \n";
  const bg_string = "Background Info: \n";

  const intervention_string =
    "Intervention: \nActive listening & validation. " +
    cbt_string +
    psy_ed_string +
    other_interv_string;

  let actions_string = "";

  const consent_string = getValue("consent");
  const ors_srs_string = getValue("ors_srs");
  actions_string =
    "Actions: \n" +
    [consent_string, ors_srs_string, getValue("self_care")]
      .filter((item) => item)
      .join("\n");

  output!.value =
    presentation_string +
    "\n\n" +
    risk_string +
    "\n\n" +
    problem_string +
    "\n\n" +
    bg_string +
    "\n\n" +
    intervention_string +
    "\n\n" +
    actions_string +
    "\n";
  console.log(app);
}
