import React from "react";

export default function CardNews(props) {
  return (
    <div
      class="card text-center align-items-center"
      style={{
        width: "20rem",
        height: "32rem",
        "margin-bottom": "10px",
        backgroundColor: "lightyellow",
      }}
    >
      <img src={props.urlToImage} class="card-img-top " alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.author}</p>
        <a
          href={props.newslink}
          class="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
