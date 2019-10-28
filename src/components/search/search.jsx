import React from "react";
import s from "./search.module.css";

const Search = props => {
  return (
    <form>
  <input type="text"/>
  <button className={s.search} type="submit"><i class="fas fa-search"></i></button>
    </form>
  );
};

export default Search;