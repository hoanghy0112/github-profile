import "./App.sass"
import SearchBox from "components/Search/SearchBox"
import SearchResult from "components/Search/SearchResult"
import Content from "components/Content/Content"

function App() {
   return <div className="container">
      <SearchBox />
      <SearchResult />
      <Content />
   </div>
}

export default App
