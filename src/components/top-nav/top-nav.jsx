import './top-nav.scss';

const className = 'top-nav';

const TopNav = () => {
  return (
    <nav className={className}>
      {/* could make this dynanmic */}
      <h1>Property Listings</h1>
    </nav>
  );
};

export default TopNav;
