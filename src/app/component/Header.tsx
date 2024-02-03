import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link href={"/student"}> Student </Link> <br />
      <Link href={"/teacher"}> Teacher </Link>
    </div>
  );
};

export default Header;
