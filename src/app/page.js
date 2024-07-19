import HomeComponent from './components/Home';
import Loading from './components/Loading';
import ErroGetFetch from './components/ErroGetFetch';

export default function Home() {
  return (
    <div>
      <HomeComponent />
      <Loading/>
      <ErroGetFetch/>
    </div>
  );
}
