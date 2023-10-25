import { useParams } from "react-router-dom";
import UserDetails from "./UserProfile";

const ShowUser = () => {
  // Get the docId parameter from the URL
  const { docId } = useParams();
  console.log(docId);

  return (
    <div>
      <UserDetails docId={docId} />
    </div>
  );
};

export default ShowUser;
