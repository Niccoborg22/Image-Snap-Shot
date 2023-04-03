import { ChangeEvent, FormEvent, useState } from "react";

interface Page {
  name: string;
  url: string;
}

interface SearchBarProps {
  pages: Page[];
}

function SearchBar({ pages }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const matchingPage = pages.find(
      (page) => page.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (matchingPage) {
      // Redirect to the matching page
      window.location.href = matchingPage.url;
    } else {
      // Display a message to the user
      alert(`No page named "${searchTerm}" is available.`);
    }
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearchChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
