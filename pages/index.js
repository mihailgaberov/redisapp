import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <div>
      <h1>Create a Car</h1>
      <CarForm />

      <h2>Search</h2>
      <SearchForm />
    </div>
  )
}