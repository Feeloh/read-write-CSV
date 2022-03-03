const fs = require('fs');

const getTechTalkPresenter = () => {

  let teamMembers = [];
  let techTalkpresenter = null;
  let remainingMembers = [];

  teamMembers =  fetchTeamMembers();

  if(teamMembers.length < 0 ) return;
  techTalkpresenter = teamMembers[Math.floor(Math.random()*teamMembers.length)];
  remainingMembers = teamMembers.filter(member => member !== techTalkpresenter);

  writeBackToCSVRemaingMembers(remainingMembers);

  return techTalkpresenter;
}

const fetchTeamMembers = () => {

  let fetchedTeamMembers = [];
  let csvData, csvRows;

  csvData = fs.readFileSync("team.csv").toLocaleString();
  csvRows = csvData.split("\n").forEach((csvRow) => { fetchedTeamMembers = csvRow.split(",")});

  return fetchedTeamMembers;
}

const writeBackToCSVRemaingMembers = (teamMembers) => {

  let stringfyMembers;

  stringfyMembers = teamMembers.map(teamMember => `${teamMember}`).join(',');
  fs.writeFile("team.csv", stringfyMembers, (err) => {
    if (err) console.log(err);
  })

}

console.log(getTechTalkPresenter());