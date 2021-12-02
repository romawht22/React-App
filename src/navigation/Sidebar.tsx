import { Link } from 'react-router-dom';
import c from './Sidebar.module.css';
const Sidebar:React.FC = () => {
  return (
    <div className={`${c.sidebar}`}>
      <div className={`${c.link}`}>
        <Link to='/profile'>Profile</Link>
      </div>
      <div className={`${c.link}`}>
        <Link to='/messages'>Messages</Link>
      </div>
      <div className={`${c.link}`}>
        <Link to='/settings'>Settings</Link>
      </div>
      <div className={`${c.link}`}>
        <Link to='/users'>Users</Link>
      </div>
    </div>
  );
};
export default Sidebar;
