import React from "react";

export default function Post({
  title = "title",
  body = "blog text",
  date = "dd/mm/yyyy",
}) {
  return (
    <div className="mb-4">
      <div className="alert alert-info d-flex flex-column">
        <h3 className="subtitle">{capitalizeFirstLetter(title)}</h3>
        <p>{body}</p>
        <small style={{ width: "100%" }} className="text-right text-accept">
          {date}
        </small>
      </div>
      Post
    </div>
  );
}
// Utility function

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}