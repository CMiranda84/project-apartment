import { useState } from "react";
import "./SearchPage.css"

function SearchPage({setSearchString}) {
  const [timeoutId, setTimeoutId] = useState(null);
  function handleSearch(event) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    let id = setTimeout(() => {
      setSearchString(event.target.value);
    }, 500);
    setTimeoutId(id)
  }
  return (
    <div>
      <div>
        <input
          className="inputSearch"
          type="text"
        //   value={setSearchString}
          placeholder="Search property by Title"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchPage;
