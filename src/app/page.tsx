import { ClientList } from "./component/ClientList";
import { Header } from "./component/Header";
import { SearchBar } from "./component/Searchbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header/>

      <SearchBar/>

      <ClientList />
    </div>
  );
}
