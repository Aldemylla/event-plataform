import { Route, Routes as Switch } from "react-router-dom";
import Subscribe from "./pages/Subscribe";
import Event from "./pages/Event";

export default function Router() {
  return (
    <Switch>
      <Route path='/' element={<Subscribe />} />
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Switch>
  );
}
