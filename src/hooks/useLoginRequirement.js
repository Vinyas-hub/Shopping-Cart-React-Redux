// hooks/useLoginRequirement.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory for v6

const useLoginRequirement = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate(); // Replace useHistory with useNavigate for v6

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to the login page if the user is not logged in
      navigate('/login'); // Use navigate instead of history.push for v6
    }
  }, [isLoggedIn, navigate]); // Use navigate in the dependency array

 
};
export default useLoginRequirement;

