class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card-body mb-3">
   <div class="row">
   <div class="col-md-3">
<img class="img-fluid mb-2" src="${user.avatar_url}">
<a href="${user.html_url}" target="_blank" class="btn btn-primary
btn-block mb-4">view profile </a>
   </div>
   </div class="col-md-9">
   <span class="badge-primary">public Repos:
   ${user.public_repos}</span>
   <span class="badge-secondary">public Gists:
   ${user.public_gists}</span>
   <span class="badge-success">Followers:
   ${user.followers}</span>
   <span class="badge-info">public Repos:
   ${user.following}</span>
   <br></br>
   <ul class="list-group">
<li class="list-group-item">company: ${user.company}</li>
<li class="list-group-item">website/Block: ${user.blog}</li>
<li class="list-group-item">Location: ${user.location}</li>
<li class="list-group-item">Member Since: ${user.created_at}</li>
</ul>

</ul>
   </div>
   </div>
   </div>
   <h3 class="page-headingnmb-3">Latest Repos</h3>
   <div id="repos"></div>
   `;
  }
  clearProfile() {
    this.profile.innerHTML = "";

    // show alert message

  }
  // show alert message

  showAlert(message, className) {

    //clear any remainiung Alert

    this.clearAlert();

    const div = document.createElement('div');
    //add class
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // get parent container form index

    const container = document.querySelector('.searchContainer');

    //get the search box
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    // time out after 3 sec

    setTimeout(() => {

      this.clearAlert();
    }, 3000
    );


    // clearing previous valid user data
    this.clearProfile();

  }

  //clear alert message
  clearAlert() {

    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {

      currentAlert.remove();

    }


  }

  // show user repos
  showRepos(repos) {

    let output = '';
    repos.forEach(function (repo) {

      output +=
        `
  
<div class="card card-body mb-2">
<div class="row">
<div class="col-md-6">
<a href="${repo.html_url}" target="_blank">${repo.name}</a>

</div>
<div class="col-md-6">

<span class="badge badge-primary">Stars:
${repo.stargazers_count}</span>
<span class="badge badge-secondary">Watchers:
${repo.watchers_count}</span>

<span class="badge badge-success">Forks:
${repo.forms_count}</span>

</div>
</div>
</div>
`;
    });

    //output repos

    document.getElementById('repos').innerHTML = output;
  }

}


