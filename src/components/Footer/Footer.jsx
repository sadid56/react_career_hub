const Footer = () => {
  return (
    <div>
      <footer className=" p-10 text-gray-400 bg-[#1A1919] mt-10">
        <div className="footer max-w-6xl mx-auto">
          <aside>
            <h2 className="text-4xl text-sky-500 font-bold">Career Hub</h2>
            <p>
              There are many variations of passages of Lorem Ipsum <br className="hidden md:block"/> , but
              the majority have suffered alteration in some form
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <hr  className="mt-5"/>
        <div className="footer footer-center p-4 bg-[#1A1919] text-gray-400">
          <aside>
            <p>Copyright © 2023 - All right reserved by career hub Ltd</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
