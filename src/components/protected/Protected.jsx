import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const Protected = ({
  children,
  authentication = true
}) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isLogged = useSelector(state => state.auth.isLogged);

  useEffect(() => {
    if (authentication && authentication !== isLogged) {
      navigate("/login");
    } else if (!authentication && authentication !== isLogged) {
      navigate("/");
    }
    setLoading(false);
  }, [isLogged, navigate, authentication]);

  return (
    loading ? <h1>Loading...</h1> : <>{children}</>
  );
}