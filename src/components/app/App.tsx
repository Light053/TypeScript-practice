import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodosPage from "../todos-page/todos-page";
import UserPage from '../user-page/user-page';
import Header from '../header/header';
import UseritemPage from '../user-item-page/user-item-page';
import EventsExample from '../events-example/events-example';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id?" element={<UseritemPage />} />
        <Route path='/drag' element={<EventsExample />} />
      </Routes>
    </Router>
  )
}

export default App