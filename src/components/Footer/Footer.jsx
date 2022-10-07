import './Footer.css';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <p className='footer__copyright'>
          {`© ${new Date().getFullYear()}. Сергей Батурин`}
        </p>
        <p className='footer__target'>{`Test task Bravo Soft Ltd.`}</p>
      </footer>
    </>
  );
}

export default Footer;