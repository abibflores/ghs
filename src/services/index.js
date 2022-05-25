import axios from "axios";

export const getUser = ({ queryKey = [] }) => {
  const [, name = ""] = queryKey;

  if (!name) {
    return [];
  }

  return axios
    .get(`https://api.github.com/search/users?per_page=10&page=1&q=${name}`)
    .then((res) => {
      const userList = res?.data?.items;
      let userListFormat = [];
      if (userList.length > 0) {
        userListFormat = userList.map(user => {
          return {
            title: user?.login,
            id: user?.id,
            src: user?.avatar_url,
            url: user?.html_url
          };
        });
      }
      return userListFormat;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const getRepositorie = ({ queryKey = [] }) => {
  const [, name = ""] = queryKey;
  
  if (!name) {
    return [];
  }
  
  return axios
    .get(`https://api.github.com/search/repositories?&sort=updated&per_page=10&page=1&q=${name}`)
    .then((res) => {
      console.log(res, "res");
      const repoList = res?.data?.items;
      let repoListFormat = [];
      if (repoList.length > 0) {
        repoListFormat = repoList.map(repo => {
          return {
            title: repo?.name,
            id: repo?.id,
            src: repo?.owner?.avatar_url,
            url: repo?.owner?.html_url,
            subTitle: repo?.owner?.login,
          };
        });
      }
      return repoListFormat;
    })
    .catch((error) => {
      console.log("error", error);
    });
};