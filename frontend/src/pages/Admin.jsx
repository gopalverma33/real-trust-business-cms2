import { Link } from "react-router-dom";
import AddProject from "../admin/AddProject";
import AddClient from "../admin/AddClient";
import ViewContacts from "../admin/ViewContacts";
import ViewSubscribers from "../admin/ViewSubscribers";

export default function Admin() {
  return (
    <div className="container">
      <Link to="/">← Back to Home</Link>
    
        <h1>Admin Panel</h1>
      <AddProject />
      <AddClient />
      <ViewContacts />
      <ViewSubscribers />
      {/* existing components */}
    </div>
  );
}
