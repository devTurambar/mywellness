import Link from "next/Link";

export default function Home() {
    return (
            <div style={{display:"flex"}}>
                TESTE
                <Link href="./about">
                    CLICK LINK
                </Link>
            </div>        
  );
}
