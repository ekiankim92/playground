import Link from "next/link";

interface LinkType {
  onClick: React.MouseEventHandler<HTMLElement>;
}

const ButtonMailto = ({ mailto, label }) => {
  const onClickEmail = (event: any) => {
    event.preventDefault();
    window.location.href = mailto;
  };

  return <Link href="/">{label}</Link>;
};

export default ButtonMailto;
