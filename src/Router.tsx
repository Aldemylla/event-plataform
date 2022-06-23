import { Route, Routes as Switch } from "react-router-dom";
import Event from "./pages/Event";

export default function Router() {
  return (
    <Switch>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/event' element={<Event />} />
    </Switch>
  );
}
