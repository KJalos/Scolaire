import Container from "../Layout/Container"
import SearchBar from "../UI/Forms/SearchBar"
import GroupList from "./GroupList"

const MyGroups = () => {
  return <Container>
    {/* Title */}
    <h2>My groups</h2>
    {/* Search Bar */}
    <form>
      <SearchBar place />
    </form>
    {/* Group List */}
    <GroupList />
  </Container>
}

export default MyGroups