import Header from '../header';
import './layout.styl';

const Layout = (props) => (
  <div className="layout">
    <Header />
    {props.children}
  </div>
);

export default Layout
