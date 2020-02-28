class GitHub {
  constructor() {
    this.client_id = "002a0c50fc469a624b7c";
    this.client_secret = "2aef3695868ec4a8cbc65c7e99f5722b51740c1b";

    this.repos_count = 5;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
   &client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}
   &client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile: profile,
      repos: repos
    };
  }
}
