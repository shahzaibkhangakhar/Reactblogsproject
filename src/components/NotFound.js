import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Hum Mazrat Khawa hai Ap k Milaye hue No se Rabta Mumkin nhi</h2>
      <p>Brai mehrbani koi or Number Try ki jiay...</p>
      <br/><br/><br/>
      <center><Link to="/">Ya <b> Ghar </b> Jaiye</Link></center>
    </div>
  );
}
 
export default NotFound;