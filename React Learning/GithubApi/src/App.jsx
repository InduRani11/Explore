import React, { useState } from "react";

const data = {
  "login": "InduRani11",
  "id": 168950679,
  "node_id": "U_kgDOChH7lw",
  "avatar_url": "https://avatars.githubusercontent.com/u/168950679?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/InduRani11",
  "html_url": "https://github.com/InduRani11",
  "followers_url": "https://api.github.com/users/InduRani11/followers",
  "following_url": "https://api.github.com/users/InduRani11/following{/other_user}",
  "gists_url": "https://api.github.com/users/InduRani11/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/InduRani11/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/InduRani11/subscriptions",
  "organizations_url": "https://api.github.com/users/InduRani11/orgs",
  "repos_url": "https://api.github.com/users/InduRani11/repos",
  "events_url": "https://api.github.com/users/InduRani11/events{/privacy}",
  "received_events_url": "https://api.github.com/users/InduRani11/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Indu Rani",
  "company": "coer university",
  "blog": "",
  "location": "india",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2024-05-05T04:51:02Z",
  "updated_at": "2025-04-23T03:28:26Z"
};

export default function App() {
  const [userData, setUserData] = useState(data ?? null);

  const [error, setError] = useState("");

  // async function getUserData(username) {
  //   const response = await fetch(`https://api.github.com/users/${username}`);
  //   const data = await response.json();
  //   setUserData(data)
  // }

  function handleSubmit(e, input) {
    getUserData(input);
  }

  async function getUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setError("");
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError(error.message ?? "User not found");
      });
  }

  return (
    <div className=" max-w-[1280px] m-auto App flex flex-col gap-8 p-8 justify-center min-h-screen overflow-auto">
      <UserSearch handleSubmit={handleSubmit} />
      {error ? (
        <div className="w-full text-center justify-center flex gap-4 p-4 bg-white border-red-500 shadow-red-500 rounded-md shadow-md m-auto">
          {error}
        </div>
      ) : null}
      {userData ? <UserCard userData={userData} /> : null}
    </div>
  );
}

function UserSearch({ handleSubmit = () => {} }) {
  // abc("sdvbsjdb")
  const [input, setInput] = useState("");

  function submitFn(e) {
    e.preventDefault();
    handleSubmit(e, input);
  }

  return (
    <form
      onSubmit={submitFn}
      className="w-full flex gap-4 p-4 bg-slate-200 rounded-md shadow-md m-auto"
    >
      <input
        type="search"
        placeholder="Enter Github Username ..."
        className="border-gray-400 rounded-md px-4 py-2 border-2 flex-1"
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        onClick={submitFn}
        className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
}

function UserCard({ userData = {} }) {
  const {
    name = "",
    login = "",
    avatar_url = null,
    public_repos = 0,
    public_gists = 0,
    followers = 0,
    bio="",
    following = 0,
    company="",
    location="",
    email="",
    url="",
    html_url="",
    blog= "",
    twitter_username= "",

  } = userData;

  const stats = [
    {
      label: "Repositories",
      value: public_repos,
    },
    {
      label: "Followers",
      value: followers,
    },
    {
      label: "Following",
      value: following,
    },
    {
      label: "Gists",
      value: public_gists,
    },
  ];

  const details = [
    {
      label: "Company",
      value: company,
    },
    {
      label: "Location",
      value: location,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Blog",
      value: blog,
    },
    {
      label: "Twitter",
      value: twitter_username,
    },
    {
      label: "Website",
      value: url,
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center shadow-lg rounded-2xl">
      <div className="flex-1 self-stretch flex flex-col gap-2 p-8 justify-center items-center bg-slate-950 text-white">
        <img
          src={avatar_url ?? "https://avatars.githubusercontent.com/u/583231?v=4"}
          alt="Github Avatar"
          className="w-32 h-32 rounded-full m-auto my-4 shadow-md"
        />
        <span className="font-bold text-2xl">{name}</span>
        <a className="text-xs">{login}</a>
        <p>{bio}</p>
      </div>
      <div className="w-full p-8 flex flex-col gap-8 justify-center items-center">
        <div className="w-full flex justify-center gap-4">
          {stats.map((stat) => (
            <Card1 {...stat} />
          ))}
        </div>
        <div className="w-full gap-4  grid grid-cols-2 gap-x-16">
          {details.map((detail) => (
            detail.value? <Card2 {...detail} />: <></>
          ))}
        </div>
        <a href={html_url} target="_blank" className="flex justify-center items-center gap-4 py-2 px-4 rounded-lg bg-blue-500 text-white">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Github Avatar"
            className="w-4 h-4 rounded-full "
          />
          View User on GitHub
        </a>
      </div>
    </div>
  );
}

function Card1({ label = "", value = "" }) {
  return (
    <div className="w-1/5 flex-1 p-4 flex flex-col gap-1 items-center rounded-md bg-slate-200">
      <span className="font-bold text-xl">{value}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function Card2({ label = "", value = "" }) {
  return (
    <div className="flex gap-1 items-center text-nowrap">
      <span className="text-gray-600">{label}:</span>
      <span className="text-slate-950 font-semibold">{value}</span>
    </div>
  );
}