// import './style.css'
import "chota";

document.getElementById("generate_button")!.onclick = generateNoteTemplate;
document.getElementById("bg_switch")!.onclick = toggleBGSection;

// const problems_textarea_editor = document.getElementById("detail_relx_conf");

function getValue(name: String) {
  return (<HTMLInputElement>(
    document.querySelector(`input[name=${name}]:checked`)
  ))?.value;
}

function toggleBGSection() {
  setFieldSetStatus("f_work");
  setFieldSetStatus("f_family");
  // const work_status_select = <HTMLSelectElement>(
  //   document.getElementById("work_status")
  // );
  // setEnableElement(work_status_select);
  // const relx_status_select = <HTMLSelectElement>(
  //   document.getElementById("relx_status")
  // );
  // setEnableElement(relx_status_select);
  // setEnableElement(
  //   <HTMLInputElement>document.getElementById("work_status_details")
  // );
  // setEnableElement(
  //   <HTMLInputElement>document.getElementById("relx_status_details")
  // );
}

function getFieldSetStatus(name: string): HTMLFieldSetElement {
  const status = <HTMLFieldSetElement>document.getElementById(name);
  return status;
}

function setFieldSetStatus(name: string) {
  const status = getFieldSetStatus(name);
  if (status.disabled == true) {
    status.disabled = false;
  } else {
    status.disabled = true;
  }
}

function setEnableElement(select: HTMLSelectElement | HTMLInputElement) {
  if (select.disabled == true) {
    select.disabled = false;
  } else {
    select.disabled = true;
  }
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

  const affect_string = getValue("affect");

  const thought_string = getValue("tho_organisation");

  const cbt = [
    getValue("cbt_soc"),
    getValue("cbt_abc"),
    getValue("cbt_dis"),
    getValue("cbt_ba"),
    getValue("cbt_exp"),
    getValue("cbt_experiment"),
    getValue("cbt_reinf"),
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
    getValue("unconditional_acc"),
    getValue("comm_skill_training"),
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
    "Affect: " +
    affect_string +
    "\n" +
    "Thoughts: " +
    thought_string;

  let risk_string = "Risk: " + getValue("risk_suicide");
  const previous_risk_string = getValue("risk_previous_suicide");
  if (previous_risk_string != undefined) {
    risk_string += "\n" + previous_risk_string;
  }
  const nssi_string = getValue("risk_nssi");
  if (nssi_string !== "nil") {
    risk_string = risk_string + ", " + nssi_string;
  }

  let problem_string: string;

  const problem_text = (<HTMLTextAreaElement>document.getElementById("details"))
    .value;
  if (problem_text === undefined || problem_text === "") {
    problem_string = "";
  } else {
    problem_string = "Presenting Problems: \n" + problem_text + "\n\n";
  }

  let bg_string: string;

  const work_status = (<HTMLSelectElement>(
    document.querySelector("#work_status")
  )).value;
  const relx_status = (<HTMLSelectElement>(
    document.querySelector("#relx_status")
  )).value;

  let work_status_details = (<HTMLTextAreaElement>(
    document.getElementById("work_status_details")
  )).value;
  let relx_status_details = (<HTMLTextAreaElement>(
    document.getElementById("relx_status_details")
  )).value;

  let work_status_details_string: String;
  let relx_status_details_string: String;

  if (work_status_details === undefined || work_status_details === "") {
    work_status_details_string = "";
  } else {
    work_status_details_string = work_status_details;
  }

  if (relx_status_details === undefined || relx_status_details === "") {
    relx_status_details_string = "";
  } else {
    relx_status_details_string = relx_status_details;
  }

  bg_string =
    "Background Info: \n" +
    work_status +
    ". " +
    work_status_details_string +
    "\n" +
    relx_status +
    ". " +
    relx_status_details_string;

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
    [
      consent_string,
      ors_srs_string,
      getValue("self_care"),
      getValue("debrief_manager"),
      getValue("homework"),
      getValue("rebook"),
    ]
      .filter((item) => item)
      .join("\n");

  const template_string =
    presentation_string +
    "\n\n" +
    risk_string +
    "\n\n" +
    problem_string +
    bg_string +
    "\n\n" +
    intervention_string +
    "\n\n" +
    actions_string +
    "\n";

  output!.value = template_string;
  console.log(template_string);
}
