const github = new GitHub();
//init UI

const ui = new UI();

//search input
const searchUser = document.getElementById("searchUser");

//search input eventListener
searchUser.addEventListener("keyup", e => {
  //get input text
  const userText = e.target.value;
  if (userText !== "") {
    //make http call

    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //show alert

        ui.showAlert("user not found", "alert alert-danger");

      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        // console.log(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
