import { VscWorkspaceUnknown } from "react-icons/vsc";
import "./notfound.scss";

export const NotFound = () => {
  return (
    <section>
      <div className="notfound">
        <span><VscWorkspaceUnknown/></span>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
      </section>
  );
};
