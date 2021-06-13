import { SearchBarStyled } from "../styles";
const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search by cake name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};
export default SearchBar;
