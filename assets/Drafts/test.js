let hierarchyCounter = 0;
let teamLeaderCounter = 0;
let teamMemberCounter = 0;
let individualContactCounter = 0;

function createContactElement(level, id) {
  return `
    <div class="form-group d-flex mt-3">
      <span class="material-symbols-rounded pr-5">
        person
      </span>
      <input type="text" name="contactName_${level}_${id}" class="w-75 p-2 rounded" placeholder="Enter Contact Name">
    </div>
    <div class="form-group d-flex">
      <span class="material-symbols-rounded pr-5">
        call
      </span>
      <input type="text" name="contactNum_${level}_${id}" class="w-75 p-2 rounded" placeholder="Enter Contact Number">
    </div>
    <div class="form-group d-flex">
      <span class="material-symbols-rounded pr-5">
        mail
      </span>
      <input type="email" name="contactEml_${level}_${id}" class="w-75 p-2 rounded" placeholder="Enter Contact Email">
    </div>
  `;
}

function createTeamMemberElement() {
  const teamMemberElement = `
    <div class="col-md-4 mt-4">
      <h3>Team Member ${teamMemberCounter + 1}</h3>
      <button class="btn btn-primary mt-2" id="addIndividualBtn_${hierarchyCounter}_${teamLeaderCounter}_${teamMemberCounter}">Add Individual Contact</button>
      <div id="individualContactsGroup_${hierarchyCounter}_${teamLeaderCounter}_${teamMemberCounter}">
        <!-- Dynamic content will be added here -->
        ${createContactElement("individual", `${hierarchyCounter}_${teamLeaderCounter}_${teamMemberCounter}_${individualContactCounter}`)}
      </div>
    </div>
  `;
  return teamMemberElement;
}

function createTeamLeaderElement() {
  const teamLeaderElement = `
    <div class="col-md-6 mt-4">
      <h2>Team Leader ${teamLeaderCounter + 1}</h2>
      <button class="btn btn-primary mt-2" id="addTeamMemberBtn_${hierarchyCounter}_${teamLeaderCounter}">Add Team Member</button>
      <div id="teamMembersGroup_${hierarchyCounter}_${teamLeaderCounter}">
        <!-- Dynamic content will be added here -->
        ${createTeamMemberElement()}
      </div>
    </div>
  `;
  return teamLeaderElement;
}

function createHierarchyElement() {
  const hierarchyElement = `
    <div class="row mt-5">
      <div class="col-md-12">
        <h1>Hierarchy ${hierarchyCounter + 1}</h1>
        <button class="btn btn-primary mt-2" id="addTeamLeaderBtn_${hierarchyCounter}">Add Team Leader</button>
        <div id="teamLeadersGroup_${hierarchyCounter}">
          <!-- Dynamic content will be added here -->
          ${createTeamLeaderElement()}
        </div>
      </div>
    </div>
  `;
  return hierarchyElement;
}

function addIndividualContact() {
  const newContact = createContactElement("individual", `${hierarchyCounter}_${teamLeaderCounter}_${teamMemberCounter}_${individualContactCounter}`);
  $(`#individualContactsGroup_${hierarchyCounter}_${teamLeaderCounter}_${teamMemberCounter}`).append(newContact);
  individualContactCounter++;
}

function addTeamMember() {
  const newTeamMember = createTeamMemberElement();
  $(`#teamMembersGroup_${hierarchyCounter}_${teamLeaderCounter}`).append(newTeamMember);
  $(`#addIndividualBtn_${hierarchyCounter}_${teamLeaderCounter}_${teamMemberCounter}`).click(function () {
    addIndividualContact();
  });
  teamMemberCounter++;
  individualContactCounter = 0;
}

function addTeamLeader() {
  const newTeamLeader = createTeamLeaderElement();
  $(`#teamLeadersGroup_${hierarchyCounter}`).append(newTeamLeader);
  $(`#addTeamMemberBtn_${hierarchyCounter}_${teamLeaderCounter}`).click(function () {
    addTeamMember();
  });
  teamLeaderCounter++;
  teamMemberCounter = 0;
}

function addHierarchy() {
  const newHierarchy = createHierarchyElement();
  $("#hierarchy").append(newHierarchy);
  $(`#addTeamLeaderBtn_${hierarchyCounter}`).click(function () {
    addTeamLeader();
  });
  hierarchyCounter++;
  teamLeaderCounter = 0;
}

$(document).ready(function () {
  // Event listener for adding hierarchies
  $("#addTeamLeaderBtn").click(function () {
    addHierarchy();
  });
});